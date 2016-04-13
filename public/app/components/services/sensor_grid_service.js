angular.module('Application')
    .factory("SensorGridService", function(ApiService){
    return {
        base:"sensor_grid",
        Basic:function(){
            return ApiService.rest(this.base+"/:id", {
                new:{method:"POST", params:{}},
                all:{method:"GET", params:{}},
                byId:{method:"GET", params:{id:"@id"}},
                del:{method:"DELETE", params:{id:"@id"}}

            });
        },
         Secret:function(){
            return ApiService.rest(this.base+"/:id/secret", {
                reload:{method:"GET", params:{id:"@id"}}
            });
        },
         CommunicationCenter:function(){
            return ApiService.rest(this.base+"/:id/communication_center", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        }
    }
});