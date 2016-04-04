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
        },
        DisplayName:function(){
            return ApiService.rest(this.base+"/:id/display_name", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },

        Type:function(){
            return ApiService.rest(this.base+"/:id/type", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },
        DigitalUnits:function(){
            return ApiService.rest(this.base+"/:id/digital", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },
         AnalogUnits:function(){
            return ApiService.rest(this.base+"/:id/analog", {
                new:{method:"POST", params:{id:"@id"}}
            });
        }
        
        
        
    };
});