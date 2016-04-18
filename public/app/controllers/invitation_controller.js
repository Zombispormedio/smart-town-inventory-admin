angular.module('Application')
    .controller('InvitationCtrl', function($rootScope, $scope,$stateParams, OAuthService, RequestService){

    var code=$stateParams.code;
    console.log(code);
});