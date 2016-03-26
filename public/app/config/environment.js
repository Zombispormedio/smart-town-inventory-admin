angular.module('Application')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, $localStorageProvider, $mdThemingProvider, twemojiProvider){


    /**Routes**/
    $stateProvider
        .state("login", {
        url:"/login",
        onEnter:function($rootScope){
            if($localStorageProvider.get("user")){
                 $rootScope.go("application");
            } 
        },
        templateUrl:'/views/_login/main.html',
        controller:"LoginCtrl"

    })
        .state("application", {
        url:"/",
        onEnter:function($rootScope){
            if(!$localStorageProvider.get("user")){
                $rootScope.go("login");
            } 
        },
        templateUrl:'/views/_application/main.html',
        controller:"ApplicationCtrl"

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

