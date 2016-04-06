angular.module('Application')
    .factory("RequestService", function($rootScope){


    return {
        Error:function(){
            return function(res){

                $rootScope.showSimpleToast(res.data.error);
            }
        },

        OneDataByKey:function(key, cb){
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
                    return $rootScope.showSimpleToast("Successful: No Message");
                }
                $rootScope.showSimpleToast(res.message);
                if(cb)cb();


            }
        },
        Data:function(cb){
            return function(res){
                if(!res.data){
                    return $rootScope.showSimpleToast("No data");
                }
                var values=res.data;
                cb(values);

            }
        },
        
        InternalError:function(message){
            return function(){
                $rootScope.showSimpleToast(message);
            }
        }
    }
});