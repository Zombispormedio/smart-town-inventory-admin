angular.module('Application')
    .factory("SensorService", function(ApiService){
    return {
        base:"sensor",
           Basic:function(){
            return ApiService.rest(this.base+"/:id", {
                new:{method:"POST", params:{}},
                all:{method:"GET", params:{}},
                byId:{method:"GET", params:{id:"@id"}},
                del:{method:"DELETE", params:{id:"@id"}}

            });
        }
    };
});