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
        },
        DisplayName:function(){
            return ApiService.rest(this.base+"/:id/display_name", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },
        Description:function(){
            return ApiService.rest(this.base+"/:id/description", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },
        Keywords:function(){
            return ApiService.rest(this.base+"/:id/keywords", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },
         Shape:function(){
            return ApiService.rest(this.base+"/:id/shape", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        }
        
        
    };
});