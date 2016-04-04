angular.module('Application')
    .factory("MagnitudeService", function(ApiService){
    return {
        base:"magnitude",
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