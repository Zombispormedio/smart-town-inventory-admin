angular.module('Application')
    .factory("RequestService", function($rootScope){


    return {
        Error:function(){
            return function(res){

                $rootScope.showSimpleToast(data.error);
            }
        },

        OneData:function(key, cb){
            return function(res){
                if(!res.data){
                    return $rootScope.showSimpleToast("No data");
                }
                var value=res.data[key];
                if(!value)return $rootScope.showSimpleToast("No Values");


                cb(value);

            }
        },
        Message:function(cb){
            return function(res){
                if(!res.message){
                    return $rootScope.showSimpleToast("Successful: No Meesage");
                }
                $rootScope.showSimpleToast(res.message);
                if(cb)cb();


            }
        }
    }
});