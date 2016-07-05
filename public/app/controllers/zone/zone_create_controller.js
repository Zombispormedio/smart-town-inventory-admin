angular.module('Application')
    .controller('CreateZoneCtrl',function($scope,  $rootScope,  NgMap, ZoneService, RequestService){

    var self=this;
    $scope.self=self;

    $scope.goBack=function(){
        $rootScope.go("application.zones.list");
    }

    $scope.newShape=true;

    $scope.zone={
        display_name:"",
        center:[],
        shape:{
            type:"rectangle"
        }
    }



    $scope.setShape=function(type){
        $scope.zone.shape={type:type};
        $scope.newShape=true;
    }


    NgMap.getMap().then(function(map) {

        self.centerChanged=function(event) {
            if(!$scope.$$phase) {
                $scope.$apply(function(){
                    $scope.zone.center[0]=map.center.lat();
                    $scope.zone.center[1]=map.center.lng();
                });
            }
        }

        self.onMapOverlayCompleted = function(e){
            $scope.newShape=false;

            var type=e.type;
            var overlay=e.overlay;
            var shape={
                type:type
            }
            switch(type){
                case "rectangle":{
                    var b=overlay.getBounds();
                    var ne=b.getNorthEast();
                    var se=b.getSouthWest();
                    shape.bounds=[[se.lat(),se.lng()], [ne.lat(), ne.lng() ]];
                    break;
                }
                case "circle":{
                    shape.radius=overlay.getRadius();
                    var center=overlay.getCenter();
                    shape.center=[
                        center.lat(),
                        center.lng(),
                    ];

                    break;
                }    
                case "polygon":
                    shape.paths=overlay.getPath().b.map(function(a){
                        return [a.lat(), a.lng()];
                    });

                    break;

            }

            e.overlay.setMap(null);
            $scope.$apply(function(){
                $scope.zone.shape=shape;
            });



        };

        self.trackPolygon=function(){

            var polygon= map.shapes.polygon;

            polygon.getPaths().forEach(function(p){

                google.maps.event.addListener(p, 'insert_at', function(){
                    $scope.$apply(function(){
                        $scope.zone.shape.paths=polygon.getPath().b.map(function(a){
                            return [a.lat(), a.lng()];
                        });
                    });
                });

                google.maps.event.addListener(p, 'remove_at', function(){
                    $scope.$apply(function(){
                        $scope.zone.shape.paths=polygon.getPath().b.map(function(a){
                            return [a.lat(), a.lng()];
                        });
                    });
                });

                google.maps.event.addListener(p, 'set_at', function(){
                    $scope.$apply(function(){
                        $scope.zone.shape.paths=polygon.getPath().b.map(function(a){
                            return [a.lat(), a.lng()];
                        });
                    });
                });
            });


        }

        self.changeCenterCircle=function(e){
            $scope.$apply(function(){

                var a=e.latLng;
                $scope.zone.shape.center=[a.lat(), a.lng()];
            });
        };

        self.changeCircleRadius=function(e){
            var circle=map.shapes.circle;
            if(!$scope.$$phase) {
                $scope.$apply(function(){
                    $scope.zone.shape.radius=circle.getRadius();
                });
            }
        }


        self.changeRectangle=function(){

            var rectangle=map.shapes.rectangle;
            var b=rectangle.getBounds();
            var ne=b.getNorthEast();
            var se=b.getSouthWest();

            if(!$scope.$$phase) {
                $scope.$apply(function(){
                    $scope.zone.shape.bounds=[[se.lat(),se.lng()], [ne.lat(), ne.lng() ]];
                });
            }
        }


    });






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

        zone.center=reverse(zone.center);
        zone.shape.center=reverse(zone.shape.center);
        zone.shape.bounds=reverse2d(zone.shape.bounds);
        zone.shape.paths=  reverse2d(zone.shape.paths);



        ZoneService.Basic().new(zone, RequestService.Message($scope.goBack), RequestService.Error())

    }

    $scope.getCurrentLocation();
});