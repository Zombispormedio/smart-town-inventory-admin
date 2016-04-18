angular.module('Application')
    .controller('InviteCtrl', function($rootScope, $scope, OAuthService, RequestService){

    $scope.guest={
        email:""
    }
    $scope.goBack=function(){
        $rootScope.go("application.dashboard.list");
    }
    
    $scope.sendInvitation=function(){
        if($scope.guest.email!==""){
             OAuthService.Invite().set($scope.guest, RequestService.Message($scope.goBack), RequestService.Error());
        }
    }
});