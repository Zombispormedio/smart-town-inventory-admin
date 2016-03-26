angular.module('Application').config(function($stateProvider, $urlRouterProvider, $httpProvider,$mdThemingProvider, twemojiProvider){

    
    /**Routes**/
    $stateProvider
        .state("login", {
        url:"/login",
        templateUrl:'/views/_login/main.html',
        controller:"LoginCtrl"

    });
    $urlRouterProvider.otherwise("/login");
    
      $httpProvider.interceptors.push('AuthInterceptor');
    
    
    /**Themes**/
    $mdThemingProvider.theme('loginTheme')
        .primaryPalette('orange')
        .accentPalette('yellow');
    
    
    /**EmojisConfig**/
     twemojiProvider.setOptions({size:"72x72"});

});

