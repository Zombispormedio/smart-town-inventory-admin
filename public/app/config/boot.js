angular.module('Application')
    .run(function($rootScope, $state, $mdToast, $state){
    
    $rootScope.go = function (state, params) {
        $state.go(state, params);
    };

    $rootScope.showSimpleToast = function(message) {

        $mdToast.show(
            $mdToast.simple()
            .textContent(message)
            .position("bottom left")
            .hideDelay(1000)
        );
    };
    
    $rootScope.statify=function(parent, child){
        if(child=="Sensor"){
            child="Dashboard";
        }
        return child?$state.href(parent+"."+child.toLowerCase()):"";
    }
    
    $rootScope.goWithDestroy=function(scope, state, params){
        scope.$destroy();
        $rootScope.go(state, params);
    }

});