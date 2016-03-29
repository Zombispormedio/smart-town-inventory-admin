angular.module('Application')
    .controller('ApplicationCtrl', function($rootScope, $scope, OAuthService, RequestService){

    $scope.user={};

    $scope.array_colors=Array.apply(null, Array(27)).map(function(){return "#FF9800"});

    $scope.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };


    this.WhoIAm=function(){

        OAuthService. whoiam()._(RequestService.OneData("email", function(data){
            $scope.user.email=data;

        }),RequestService.Error());  

    };

    this.WhoIAm();

    $scope.logout=function(){
        OAuthService.logout()._(function(data){
            console.log(data);
            deleteLocal("user");

            $rootScope.go("login");

        },RequestService.Error());  
    };


});