angular.module('Application')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider){


    /**Routes**/
    $stateProvider
        .state("login", {
        url:"/login",
        onEnter:function($rootScope){
            if(getLocal("user")){
                 $rootScope.go("application");
            } 
        },
        templateUrl:'/views/_login/main.html',
        controller:"LoginCtrl"

    })
        .state("application", {
        url:"/",
        onEnter:function($rootScope){
            
            if(!getLocal("user")){
                 $rootScope.go("login");
            } 
        },
        templateUrl:'/views/_application/main.html',
        controller:"ApplicationCtrl"

    });



    $urlRouterProvider.otherwise("/login");

    $httpProvider.interceptors.push('AuthInterceptor');


    /**Themes**/
    $mdThemingProvider.theme('smartTheme')
        .primaryPalette('orange')
        .accentPalette('yellow');
    
   


  

});

