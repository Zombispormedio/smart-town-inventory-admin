angular.module('Application')
    .controller('InviteCtrl', function($rootScope, $scope, OAuthService, RequestService){


    $scope.goBack=function(){
        $rootScope.go("application.dashboard.list");
    }
});