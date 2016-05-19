angular.module('Application')
    .controller('SensorImportDialogCtrl',function($scope, $mdDialog, SensorGridService, MagnitudeService, RequestService, _import){

    $scope.sensors=_import.data;
    $scope.labels=_import.labels;


    async.map( $scope.sensors, function(item, done){
      
        SensorGridService.Ref().verify({ref:item.grid_ref}, RequestService.Data(function(data){
           
            item.grid_verify=true;
            item.grid_valid=data;
            
            done();
        }), function(){
            item.grid_verify=true;
            item.grid_valid=false;
            done();
        });
        
        
        
        
    }, function(){
        
    });
    
      async.map( $scope.sensors, function(item, done){
        
      
        MagnitudeService.Ref().verify({ref:item.magnitude_ref}, RequestService.Data(function(data){
           
            item.magnitude_verify=true;
            item.magnitude_valid=data;
            
            done();
        }), function(){
            item.magnitude_verify=true;
            item.magnitude_valid=false;
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
        
        var to_upload=$scope.sensors.filter(function(item){
           return item.grid_valid&&item.magnitude_valid;  
        });
        
        
        $mdDialog.hide(to_upload);
    };
});