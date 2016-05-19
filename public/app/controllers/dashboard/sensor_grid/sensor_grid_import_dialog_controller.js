angular.module('Application')
    .controller('SensorGridImportDialogCtrl',function($scope, $mdDialog, ZoneService, RequestService, _import){
    
    $scope.sensor_grids=_import.data;
    $scope.labels=_import.labels;


    async.map( $scope.sensor_grids, function(item, done){
        
        item.location_longitude= item.location_longitude.replace(",", ".");
         item.location_latitude= item.location_latitude.replace(",", ".");
        
        ZoneService.Ref().verify({ref:item.zone_ref}, RequestService.Data(function(data){
           
            item.loaded=true;
            item.valid=data;
            
            done();
        }), function(){
            item.loaded=true;
            item.valid=false;
            done();
        });
        
        
        
        
    }, function(){
        
    });
    

    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.confirm = function() {
        
        var to_upload=$scope.sensor_grids.filter(function(item){
           return item.valid; 
        });
        
        
        $mdDialog.hide(to_upload);
    };
});