angular.module('Application')
    .controller('InvitationCtrl', function($rootScope, $scope,$stateParams, OAuthService, RequestService){


    $scope.guest={
        password:"",
        repeat_password:""
    }
    
    var goBack=function(){
         $rootScope.go("login");
    }
    
    var code=$stateParams.code;
    OAuthService.Invitation().check({code:code}, RequestService.Data(function(data){
        if(!data.success) goBack();
    }), goBack);

    $scope.goBack=function(){
        $rootScope.go("login");
    }


    $scope.signIn=function(){
        var guest=$scope.guest;
        if(guest.password!==""&&guest.respeat_password!==""){

            if(guest.password===guest.repeat_password){

                var result=_.pick(guest, ["password"]);

                OAuthService.Invitation().set({code:code}, result, RequestService.Message($scope.goBack), RequestService.Error());

            }else{
                $rootScope.showSimpleToast("Not Equals");
            }

        }else{
             $rootScope.showSimpleToast("Empty Password");
        }
    }
});