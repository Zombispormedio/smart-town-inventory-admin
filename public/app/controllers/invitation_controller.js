angular.module('Application')
    .controller('InvitationCtrl', function($rootScope, $scope,$stateParams, OAuthService, RequestService){

    
    $scope.guest={
        password:"",
        repeat_password:""
    }
    var code=$stateParams.code;
    /*OAuthService.Invitation().check({code:code}, function(){}, function(){
        $rootScope.go("login");
    });*/
    
     $scope.goBack=function(){
        $rootScope.go("login");
    }
    
    
    $scope.signIn=function(){
        var guest=$scope.guest;
        if(guest.password!==""&&guest.respeat_password!==""){
            
            if(guest.password===guest.respeat_password){
                
                var result=_.pick(guest, ["password"]);
            
                 OAuthService.Invite().set({code:code}, result, RequestService.Message($scope.goBack), RequestService.Error());
                
            }
            
        }
    }
});