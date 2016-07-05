angular.module('Application')
    .controller('DetailZoneCtrl',function($rootScope, $scope, $stateParams,  ZoneService, RequestService, ThemeService, NgMap){

    var self=this;
    $scope.self=self;

    $scope.Color="#FF0000";
    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);

    }
    $scope.goBack=function(){
        $scope.go("application.zones.list");
    }


    var zone_id=$stateParams.id;



    var tabs=["info", "location"];

    $scope.SelectedIndex=tabs.indexOf($stateParams.tab)>-1?$stateParams.tab:"info";

    $scope.select=function(index){
        $rootScope.go("application.zones.detail", {id:zone_id, tab:index });
    }


    $scope.editable={
        display_name:false,
        description:false,
        keywords:false,
        location:false
    };
    $scope.newShape=false;

    $scope.changeDisplayName=function(){

        ZoneService.DisplayName().set({id:zone_id},{display_name:$scope.zone.display_name}, RequestService.Data(function(data){
            $scope.zone=data;
            $scope.editable.display_name=false;                                                  
        }), RequestService.Error());
    }


    $scope.changeDescription=function(){

        ZoneService.Description().set({id:zone_id},{description:$scope.zone.description}, RequestService.Data(function(data){
            $scope.zone=data;
            $scope.editable.description=false;                                                  
        }), RequestService.Error());
    }

    $scope.changeKeywords=function(){

        ZoneService.Keywords().set({id:zone_id},{keywords:$scope.zone.keywords}, RequestService.Data(function(data){
            $scope.zone=data;
            $scope.editable.keywords=false;                                                  
        }), RequestService.Error());
    }


    NgMap.getMap().then(function(map) {

        self.centerChanged=function(event) {
            if(!$scope.$$phase && $scope.editable.location) {
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

        self.getMap=function(){
            return map;
        }


    });

    $scope.setShape=function(type){
        $scope.zone.shape={type:type};
        $scope.newShape=true;
    }



    $scope.changeLocation=function(){
        var shape=$scope.zone.shape;
        var shapes=self.getMap().shapes;
        
        var map_shape=_.find(shapes, function(o){
           return o.strokeColor===$scope.Color;
        });
        
        switch(shape.type){
            case "rectangle":{
                var rectangle=map_shape;
                var b=rectangle.getBounds();
                var ne=b.getNorthEast();
                var se=b.getSouthWest();
                shape.bounds=[[se.lat(),se.lng()], [ne.lat(), ne.lng() ]];
                break;
            }
            case "circle":
                var circle=map_shape;
                shape.radius=circle.getRadius();
                var center= circle.getCenter()
                shape.center=[
                    center.lat(),
                    center.lng(),
                ];
                break;
            case "polygon":
                var polygon=map_shape;
                shape.paths=polygon.getPath().b.map(function(a){
                    return [a.lat(), a.lng()];
                });

                break;
        }


        var zone=angular.copy($scope.zone);
        zone.center=reverse(zone.center);
        zone.shape.center=reverse(zone.shape.center);
        zone.shape.bounds=reverse2d(zone.shape.bounds);
        zone.shape.paths=  reverse2d(zone.shape.paths);


        ZoneService.Shape().set({id:zone_id},{shape:zone.shape, center:zone.center}, RequestService.Data(function(data){
            $scope.zone=data;
            $scope.zone.center=reverse(zone.center);
            $scope.zone.shape.center=reverse(zone.shape.center);
            $scope.zone.shape.bounds=reverse2d(zone.shape.bounds);
            $scope.zone.shape.paths=  reverse2d(zone.shape.paths);
            $scope.editable.location=false;                                                  
        }), RequestService.Error());

    }

    $scope.updateLocation=function(){
        $scope.editable.location=true;
        var shape=$scope.zone.shape;
        switch(shape.type){
            case "circle":
                if(shape.radius&&shape.center){
                    if(shape.radius==0.0|| shape.center.length==0){
                        $scope.newShape=true;
                    }
                }else{
                    $scope.newShape=true;
                }

                break;
            case "rectangle":
                if(shape.bounds){
                    if(shape.bounds.length==0){
                        $scope.newShape=true;
                    }
                }else{
                    $scope.newShape=true;
                }
                break;
            case "polygon":
                if(shape.paths){
                    if(shape.paths.length==0){
                        $scope.newShape=true;
                    }
                }else{
                    $scope.newShape=true;
                }
                break;

        }

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



    this.ZoneById=function(){
        ZoneService.Basic().byId({id:zone_id}, RequestService.Data(function(data){
            var zone=data;

            zone.center=reverse(zone.center);
            zone.shape.center=reverse(zone.shape.center);
            zone.shape.bounds=reverse2d(zone.shape.bounds);
            zone.shape.paths=  reverse2d(zone.shape.paths);
            $scope.zone=zone;
        }), RequestService.Error());
    }

    this.ZoneById();


    var Others=function(){
        ZoneService.Others().get({id:zone_id}, RequestService.Data(function(data){
            $scope.others=data.map(function(item){

                item.center=reverse(item.center);
                item.shape.center=reverse(item.shape.center);
                item.shape.bounds=reverse2d(item.shape.bounds);
                item.shape.paths=  reverse2d(item.shape.paths);


                return item; 
            });
        }), RequestService.Error());
    }

    Others();


});