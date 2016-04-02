angular.module('Application')
    .controller('LoginCtrl', function($rootScope, $scope, OAuthService, RequestService){

    $scope.user={
        email:"",
        password:""
    }


    $scope.login=function(){
        var user=$scope.user;
        if(user.email!=="" && user.password){

            OAuthService.login()._(user, RequestService.OneData("token", function(data){
                saveLocal("user", data);

                $rootScope.go("application.dashboard");

            }),RequestService.Error());   
        }

    }


});