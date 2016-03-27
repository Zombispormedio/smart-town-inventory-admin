angular.module('Application')
    .factory("AuthInterceptor", function($q, $location){
    return {
        request: function(config){
            config.headers = config.headers || {};

            var user=getLocal("user");

            if (!config.headers.Authorization && user) {
                config.headers.Authorization = user;
            }

            return config;
        },
        requestError: function(rejection) {
            return $q.reject(rejection);
        },
        response: function(response){
            if(response.data.status === 'ERROR') { //Force error
                return $q.reject(response);
            }
            return response || $q.when(response);
        },
        responseError: function(rejection){
            if(rejection.status === 403) {
                console.error('Error de acceso');
                 localStorage.user = '';
                $location.path('/');
                return;
            }
            return $q.reject(rejection);
        }
    }
});
