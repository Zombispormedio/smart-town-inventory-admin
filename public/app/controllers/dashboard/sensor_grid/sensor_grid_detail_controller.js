angular.module('Application')
    .controller('DetailSensorGridCtrl',function($rootScope, $scope, $stateParams, SensorGridService, ZoneService, RequestService, ThemeService, clipboard, NgMap){

    var self=this;
    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.goBack=function(){
        $scope.go("application.dashboard.list");
    }

    var sensor_grid_id=$stateParams.id;

    $scope.SelectedIndex="info";

    $scope.select=function(index){
        $scope.SelectedIndex=index;
    }

    $scope.editable={
        communication_center:false,
        display_name:false,
        zone:false,
        haveAccess:false,
        location:false,
        center:null
    }
    $scope.show={
        secret:"password"
    };

    $scope.showSecret=function(){
        $scope.show.secret="text";
    }


    $scope.reloadSecret=function(){
        SensorGridService.Secret().reload({id:sensor_grid_id}, RequestService.Data(function(data){
            $scope.sensor_grid=data;
            $scope.show.secret="password";
        }), RequestService.Error());
    }


    $scope.changeCommunicationCenter=function(){
        var result=_.pick($scope.sensor_grid, ["device_name", "description"]);

        SensorGridService.CommunicationCenter().set({id:sensor_grid_id},result, RequestService.Data(function(data){
            $scope.sensor_grid=data;
            $scope.editable.communication_center=false;
        }), RequestService.Error());
    }

    $scope.copyToClipboard = function (text) {
        clipboard.copyText(text);
    };

    $scope.changeDisplayName=function(){
        var result=_.pick($scope.sensor_grid, ["display_name"]);
        SensorGridService.DisplayName().set({id:sensor_grid_id},result, RequestService.Data(function(data){
            $scope.sensor_grid=data;
            $scope.editable.display_name=false;
        }), RequestService.Error());
    }


    $scope.changeZone=function(){
        var result=_.pick($scope.sensor_grid, ["zone"]);
        SensorGridService.Zone().set({id:sensor_grid_id},result, RequestService.Data(function(data){
            $scope.sensor_grid=data;
            $scope.editable.zone=false;
        }), RequestService.Error());
    }

    $scope.allowAccess=function(){
        SensorGridService.Access().allow({id:sensor_grid_id}, RequestService.Data(function(data){
            $scope.sensor_grid=data;
            $scope.editable.haveAccess= checkAccess();
        }), RequestService.Error());
    }

    var checkAccess=function(){
        return $scope.sensor_grid.client_secret!==void 0 && $scope.sensor_grid.client_secret!=="";
    }



    $scope.getCurrentLocation=function(){

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                $scope.$apply(function(){
                    $scope.sensor_grid.location[0]=position.coords.latitude;
                    $scope.sensor_grid.location[1]=position.coords.longitude;
                    $scope.editable.center=_.clone($scope.sensor_grid.location);
                })
            });
        } 
    }

    NgMap.getMap().then(function(map) {
        var marker=map.markers[0];


        marker.addListener('dragend', function() {

            var loc=marker.getPosition();

            $scope.$apply(function () {
                $scope.sensor_grid.location[0]=loc.lat();
                $scope.sensor_grid.location[1]=loc.lng();

            });



        });

    });

    $scope.changeLocation=function(){
        var result=_.pick($scope.sensor_grid, ["location"]);

        SensorGridService.Location().set({id:sensor_grid_id},result, RequestService.Data(function(data){
            $scope.sensor_grid=data;
            $scope.editable.location=false;
        }), RequestService.Error());
    }


    $scope.createSensor=function(){
        $scope.go("application.sensor.create", {sensor_grid:sensor_grid_id});
    }
    
    var icons=["album", "barcode", "airballoon", "binoculars", "bulletin-board", "cat", "chemical-weapon", "cookie", "emoticon-poop", "fire"];    
    $scope.Icon=function(name){
        
        var index=name.charCodeAt(0)%icons.length;
        return "mdi-"+icons[index];
    };
    
    
    $scope.deleteSensor=function(id){
          SensorGridService.Sensors().del({id:sensor_grid_id, sensor_id:id}, self.SensorsAll, RequestService.Error());
    }
    
    $scope.goToSensorDetail=function(id){
        $rootScope.go("application.sensor.detail", {id:id});
    }
     
    this.SensorsAll=function(){

        SensorGridService.Sensors().all({id:sensor_grid_id}, RequestService.Data(function(data){
            $scope.sensors=data;
        }), RequestService.Error());
    };

    this.SensorsAll();
    
    
    this.ZoneAll=function(){

        ZoneService.Basic().all( RequestService.Data(function(data){
            $scope.zones=data;
        }), RequestService.Error());
    };

    this.ZoneAll();


    this.SensorGridById=function(){
        SensorGridService.Basic().byId({id:sensor_grid_id}, RequestService.Data(function(data){
            $scope.sensor_grid=data;

            $scope.editable.haveAccess= checkAccess();

            var location= $scope.sensor_grid.location;

            if( $scope.sensor_grid.location==void 0 || (location&&location.length==0) ){
                if($scope.sensor_grid.location==void 0)$scope.sensor_grid.location=[];
                $scope.getCurrentLocation();
            }else{
                console.log($scope.editable.center)
                $scope.editable.center=_.clone($scope.sensor_grid.location);
                 console.log($scope.editable.center)
            }

        }), RequestService.Error());
    }

    this.SensorGridById();
});