angular.module('Application')
    .factory("ZoneService", function(ApiService){
    return {
        base:"zone",
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