angular.module('Application')
    .run(function($rootScope, $state, $mdToast, $state){
    
    $rootScope.go = function (state, params) {
        $state.go(state, params);
    };

    $rootScope.showSimpleToast = function(message) {

        $mdToast.show(
            $mdToast.simple()
            .textContent(message)
            .position("top right")
            .hideDelay(3000)
        );
    };
    
    $rootScope.statify=function(parent, child){
        return child?$state.href(parent+"."+child.toLowerCase()):"";
    }

});