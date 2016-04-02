angular.module('Application')
    .directive('uiTitle', function($rootScope) {
    return {
        restrict: 'E',
        compile:function(tElement){
            var title=tElement[0].innerText;
            $rootScope.titleMain=title;
            tElement.attr('class', 'hide');
            tElement.empty();
        }
    };
});