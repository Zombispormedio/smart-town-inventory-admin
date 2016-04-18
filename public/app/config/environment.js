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
                $rootScope.go("application.dashboard.list");
            } 
        },
        templateUrl:'/views/_login/main.html',
        controller:"LoginCtrl"

    })
    .state("invitation", {
        url:"/invitation/:code",
        onEnter:function($rootScope){
            if(getLocal("user")){
                $rootScope.go("application.dashboard.list");
            } 
        },
        templateUrl:'/views/_invitation/main.html',
        controller:"InvitationCtrl"

    })
        .state("application", {
        url:"",
        onEnter:validUser,
        templateUrl:'/views/_application/main.html',
        controller:"ApplicationCtrl",
        abstract:true

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
        url: '/:id/:tab',
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
        url: '/:id/:tab',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_zones/show.html',
                controller: 'DetailZoneCtrl'
            }
        }
    })
    .state("application.dashboard", {
        url: '/',
        onEnter: validUser,
        views: {
            content: {
                templateUrl: '/views/_application/_dashboard/main.html',
            }
        },
            abstract:true
    })
    .state("application.dashboard.list", {
        url: '',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_dashboard/_sensor_grid/list.html',
                controller: 'DashboardCtrl'
            }
        }
    })
     .state("application.dashboard.create", {
        url: 'create',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_dashboard/_sensor_grid/create.html',
                controller: 'CreateSensorGridCtrl'
            }
        }
    })
    .state("application.dashboard.detail", {
        url: 'sensor_grid/:id/:tab',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_dashboard/_sensor_grid/show.html',
                controller: 'DetailSensorGridCtrl'
            }
        }
    })
    .state("application.sensor", {
        url: '/sensor',
        onEnter: validUser,
        views: {
            content: {
                templateUrl: '/views/_application/_dashboard/_sensor/main.html',
            }
        },
            abstract:true
    })
     .state("application.sensor.create", {
        url: '/create?sensor_grid',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_dashboard/_sensor/create.html',
                controller: 'CreateSensorCtrl'
            }
        }
    })
    .state("application.sensor.detail", {
        url: '/:id//:tab',
        onEnter: validUser,
        views: {
            'inner': {
                templateUrl: '/views/_application/_dashboard/_sensor/show.html',
                controller: 'DetailSensorCtrl'
            }
        }
    })
    .state("application.account", {
        url: '/account',
        onEnter: validUser,
        views: {
            content: {
                templateUrl: '/views/_application/_account/main.html',
                controller: 'AccountCtrl'
            }
        }
    })
    .state("application.invite", {
        url: '/invite',
        onEnter: validUser,
        views: {
            content: {
                templateUrl: '/views/_application/_invite/main.html',
                controller: 'InviteCtrl'
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

