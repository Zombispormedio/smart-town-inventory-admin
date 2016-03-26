angular.module('Application').config(function($stateProvider, $urlRouterProvider, $httpProvider,$mdThemingProvider){

    $stateProvider
        .state("login", {
        url:"/login",
        templateUrl:'/views/_login/main.html',
        controller:"LoginCtrl"

    });
    $urlRouterProvider.otherwise("/login");

    $mdThemingProvider.theme('loginTheme')
        .primaryPalette('orange')
        .accentPalette('yellow');

});

