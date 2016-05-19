angular.module('Application')
    .factory("SensorService", function(ApiService){
    return {
        base:"sensor",
        Basic:function(){
            return ApiService.rest(this.base+"/:id", {
                new:{method:"POST", params:{}},
                byId:{method:"GET", params:{id:"@id"}}

            });
        },
        Transmissor:function(){
            return ApiService.rest(this.base+"/:id/transmissor", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },
        DisplayName:function(){
            return ApiService.rest(this.base+"/:id/display_name", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },
        Magnitude:function(){
            return ApiService.rest(this.base+"/:id/magnitude", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },

        Fix:function(){
            return ApiService.rest(this.base+"/:id/fix", {
                set:{method:"GET", params:{id:"@id"}}
            });
        },
        Import:function(){
            return ApiService.rest(this.base+"s/import", {
                upload:{method:"POST", params:{}},
            });
        },
        Notifications:function(){
            return ApiService.rest(this.base+"s/notifications", {
                get:{method:"GET", params:{}},
            });
        }
    };
});