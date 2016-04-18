angular.module('Application')
    .controller('AccountCtrl', function($rootScope, $scope, OAuthService, RequestService){

    $scope.goBack=function(){
        $rootScope.go("application.dashboard.list");
    }

    $scope.editable={
        display_name:false,
        email:false
    }


    $scope.changeDisplayName=function(){
        var result=_.pick($scope.account, ["display_name"]);
        OAuthService.DisplayName().set(result, RequestService.Data(function(data){
            $scope.account=data;
            $scope.editable.display_name=false;
        }), RequestService.Error());
    }
    
    $scope.changeEmail=function(){
        var result=_.pick($scope.account, ["email"]);
        OAuthService.Email().set(result, RequestService.Data(function(data){
            $scope.account=data;
            $scope.editable.email=false;
        }), RequestService.Error());
    }
    
    this.WhoIAm=function(){

        OAuthService.whoiam()._(RequestService.Data(function(data){
            $scope.account=data;

        }),RequestService.Error());  

    };

    this.WhoIAm();


});