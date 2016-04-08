angular.module('Application')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider){

    var validUser=function($rootScope){
        if(!getLocal("user")){
            $rootScope.go("login");
        } 
    };

    /**Routes**/
    $stateProvider
        .state("login", {
        url:"/login",
        onEnter:function($rootScope){
            if(getLocal("user")){
                $rootScope.go("application.dashboard");
            } 
        },
        templateUrl:'/views/_login/main.html',
        controller:"LoginCtrl"

    })
        .state("application", {
        url:"",
        onEnter:validUser,
        templateUrl:'/views/_application/main.html',
        controller:"ApplicationCtrl",
        abstract:true

    })
        .state("application.dashboard", {
        url: '/',
        onEnter: validUser,
        views: {
            content: {
                templateUrl: '/views/_application/_dashboard/main.html',
                controller: 'DashboardCtrl'
            }
        }
    })
        .state("application.tasks", {
        url: '/tasks',
        onEnter: validUser,
        views: {
            content: {
                templateUrl: '/views/_application/_tasks/main.html',
                controller: 'TasksCtrl'
            }
        }
    })
        .state("application.magnitudes", {
        url: '/magnitudes',
        onEnter: validUser,
        views: {
            content: {
                templateUrl: '/views/_application/_magnitudes/main.html',
            }
        },
        abstract:true
    })
    .state("application.magnitudes.list", {
        url: '',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_magnitudes/list.html',
                controller: 'MagnitudesCtrl'
            }
        }
    })
     .state("application.magnitudes.create", {
        url: '/create',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_magnitudes/create.html',
                controller: 'CreateMagnitudeCtrl'
            }
        }
    })
    .state("application.magnitudes.detail", {
        url: '/:id',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_magnitudes/show.html',
                controller: 'DetailMagnitudeCtrl'
            }
        }
    })
    
     .state("application.zones", {
        url: '/zones',
        onEnter: validUser,
        views: {
            content: {
                templateUrl: '/views/_application/_zones/main.html'
            }
        },
        abstract:true
    })
     .state("application.zones.list", {
        url: '',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_zones/list.html',
                controller: 'ZonesCtrl'
            }
        }
    })
     .state("application.zones.create", {
        url: '/create',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_zones/create.html',
                controller: 'CreateZoneCtrl'
            }
        }
    })
    .state("application.zones.detail", {
        url: '/:id',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_zones/show.html',
                controller: 'DetailZoneCtrl'
            }
        }
    })









    $urlRouterProvider.otherwise("/login");

    $httpProvider.interceptors.push('AuthInterceptor');


    /**Themes**/
    $mdThemingProvider.theme('smartTheme')
        .primaryPalette('orange')
        .accentPalette('yellow');

   
});

