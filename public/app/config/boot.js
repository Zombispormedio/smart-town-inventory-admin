angular.module('Application').run(function($rootScope, $state, $mdToast){
    
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

});