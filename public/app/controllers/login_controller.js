angular.module('Application')
    .controller('LoginCtrl', function($scope, OAuthService){

    $scope.user={
        email:"",
        password:""
    }


    $scope.login=function(){
        var user=$scope.user;
        
        if(user.email!=="" && user.password){
            OAuthService.login()._(user, function(result){
                console.log(result);
            }, function(){});   
        }



    }


});