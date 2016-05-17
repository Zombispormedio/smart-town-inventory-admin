angular.module('Application')
    .controller('DetailSensorGridCtrl',function($rootScope, $scope, $stateParams, SensorGridService, ZoneService, RequestService, ThemeService, clipboard, NgMap, $window){

    var self=this;
    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.goBack=function(){
        $scope.go("application.dashboard.list");
    }



    var sensor_grid_id=$stateParams.id;

    var tabs=["info", "sensors", "location", "settings"];

    $scope.SelectedIndex=tabs.indexOf($stateParams.tab)>-1?$stateParams.tab:"info";

    $scope.select=function(index){
        $rootScope.go("application.dashboard.detail", {id:sensor_grid_id, tab:index });
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
                    $scope.sensor_grid.location[1]=position.coords.latitude;
                    $scope.sensor_grid.location[0]=position.coords.longitude;
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
                $scope.sensor_grid.location[1]=loc.lat();
                $scope.sensor_grid.location[0]=loc.lng();

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
        SensorGridService.Sensors().del({id:sensor_grid_id, sensor_id:id}, fetchSensor, RequestService.Error());
    }

    $scope.goToSensorDetail=function(id){
        $rootScope.go("application.sensor.detail", {id:id});
    }


    this.ZoneAll=function(){

        ZoneService.Search().all( RequestService.Data(function(data){
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

                $scope.editable.center=_.clone($scope.sensor_grid.location);

            }

        }), RequestService.Error());
    }

    this.SensorGridById();




    var query={
        p:0,
        s:5,
        id:sensor_grid_id
    }
    $scope.list={
        numItems:0,

        pageSize:0,
        pagination:[],
        query:query,
        numPages:0
    };



    var createPagination=function(){
        $scope.list.numPages=Math.ceil($scope.list.numItems/query.s);
        $scope.list.pagination=Array.apply(0, Array($scope.list.numPages)).map(function(_, index){
            return index;
        });
    }

    $scope.changePage=function(){
        fetchSensor();
    }

    $scope.changeSize=function(){
        query.p=0;
        fetchSensor();
    }

    $scope.next=function(){
        var page=query.p+1;
       
        if(page<$scope.list.numPages){
            query.p++;
            fetchSensor();
        }


    }

    $scope.prev=function(){
        var page=query.p;
        if(page>0){
            query.p--;

            fetchSensor();
        }
    }


    $scope.openSensorTab=function(ev, id){
        if(ev.which===3 && ev.button===2){

            $window.open("#/sensor/"+id,'_blank');
        }
    }

    $scope.searchSensor=function(){
        fetchSensor();
    }

    var fetchSensor=function(){

        SensorGridService.SensorsCount().get(query, RequestService.Data(function(data){
            $scope.list.numItems=data;

            createPagination();
        }), RequestService.Error());

        SensorGridService.Sensors().all(query, RequestService.Data(function(data){
            $scope.sensors=data;
        }), RequestService.Error());
    };

    fetchSensor();


});