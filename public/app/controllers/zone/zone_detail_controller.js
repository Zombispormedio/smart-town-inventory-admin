angular.module('Application')
    .controller('DetailZoneCtrl',function($rootScope, $scope, $stateParams,  ZoneService, RequestService, ThemeService, NgMap){

    var self=this;
    $scope.self=self;

    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.goBack=function(){
        $scope.go("application.zones.list");
    }


    var zone_id=$stateParams.id;


    $scope.SelectedIndex="info";

    $scope.select=function(index){
        $scope.SelectedIndex=index;
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
                    shape.paths=overlay.getPath().j.map(function(a){
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
	console.log(self);
        var map_shape=self.getMap().shapes;
        switch(shape.type){
            case "rectangle":{
                var rectangle=map_shape.rectangle;
                var b=rectangle.getBounds();
                var ne=b.getNorthEast();
                var se=b.getSouthWest();
                shape.bounds=[[se.lat(),se.lng()], [ne.lat(), ne.lng() ]];
                break;
            }
            case "circle":
                var circle=map_shape.circle;
                shape.radius=circle.getRadius();
                var center= circle.getCenter()
                shape.center=[
                    center.lat(),
                    center.lng(),
                ];
                break;
            case "polygon":
                var polygon=map_shape.polygon;
                shape.paths=polygon.getPath().j.map(function(a){
                    return [a.lat(), a.lng()];
                });

                break;
        }
       ZoneService.Shape().set({id:zone_id},{shape:$scope.zone.shape}, RequestService.Data(function(data){
            $scope.zone=data;
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
            $scope.zone=data;
        }), RequestService.Error());
    }

    this.ZoneById();


});