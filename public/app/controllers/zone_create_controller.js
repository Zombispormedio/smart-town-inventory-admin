angular.module('Application')
    .controller('CreateZoneCtrl',function($scope,  $rootScope,  NgMap){

    var self=this;
    $scope.self=self;

    $scope.goBack=function(){
        $rootScope.go("application.zones.list");
    }

    $scope.zone={
        display_name:"",
        center:[],
        shape:{
            type:"rectangle"
        }
    }

    self.onMapOverlayCompleted = function(e){
        console.log(e);
    };


    NgMap.getMap().then(function(map) {

        self.centerChanged=function(event) {
            if(!$scope.$$phase) {
                $scope.$apply(function(){
                    $scope.zone.center[0]=map.center.lat();
                    $scope.zone.center[1]=map.center.lng();
                });
            }
        }
    });



    $scope.setShape=function(type){
        $scope.zone.shape={type:type};
    }


    $scope.getCurrentLocation=function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                $scope.$apply(function(){
                    $scope.zone.center[0]=position.coords.latitude;
                    $scope.zone.center[1]=position.coords.longitude;
                })
            });
        } 
    }



    $scope.create=function(){
        var zone=angular.copy($scope.zone);

        if(zone.display_name==""){
            zone.display_name=chance.sentence({words: 3}).split(" ").join("").replace(".", "");
        }

    }

    $scope.getCurrentLocation();
});