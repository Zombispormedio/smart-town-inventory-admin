angular.module('Application').config(function($stateProvider, $urlRouterProvider, $httpProvider){
    
    $stateProvider
        .state("login", {
        url:"/login",
        templateUrl:'/views/_login/login.tpl.html',
        controller:"LoginCtrl"
        
    });
    $urlRouterProvider.otherwise("/login");
    
});

