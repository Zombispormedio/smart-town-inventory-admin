angular.module('Application')
    .controller('CreateMagnitudeCtrl',function($rootScope, $scope, MagnitudeService, RequestService){
    $scope.goBack=function(){
        $rootScope.go("application.magnitudes.list");
    }

    $scope.magnitude={
        display_name:"", type:"0"
    }

    $scope.create=function(){
        var magnitude=angular.copy($scope.magnitude);
     
        if(magnitude.display_name==""){
            magnitude.display_name=chance.sentence({words: 3}).split(" ").join("").replace(".", "");
        }
        

        MagnitudeService.Basic().new(magnitude, RequestService.Message($scope.goBack), RequestService.Error())
    }
});