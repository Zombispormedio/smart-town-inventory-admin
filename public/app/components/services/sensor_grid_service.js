angular.module('Application')
    .factory("SensorGridService", function(ApiService){
    return {
        base:"sensor_grid",
        Basic:function(){
            return ApiService.rest(this.base+"/:id", {
                new:{method:"POST", params:{}},
                byId:{method:"GET", params:{id:"@id"}},
                del:{method:"DELETE", params:{id:"@id"}}

            });
        },

        Search:function(){
            return ApiService.rest(this.base+"s", {
                all:{method:"GET", params:{}},
            });
        },
        Count:function(){
            return ApiService.rest(this.base+"s/count", {
                get:{method:"GET", params:{}},
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
        },
        DisplayName:function(){
            return ApiService.rest(this.base+"/:id/display_name", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },
        Zone:function(){
            return ApiService.rest(this.base+"/:id/zone", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },
        Access:function(){
            return ApiService.rest(this.base+"/:id/access", {
                allow:{method:"GET", params:{id:"@id"}}
            });
        },
        Location:function(){
            return ApiService.rest(this.base+"/:id/location", {
                set:{method:"PUT", params:{id:"@id"}}
            });
        },

        Sensors:function(){
            return ApiService.rest(this.base+"/:id/sensors/:sensor_id", {
                all:{method:"GET", params:{id:"@id"}},
                del:{method:"DELETE", params:{id:"@id", sensor_id:"@sensor_id"}}
            });
        },
        SensorsCount:function(){
            return ApiService.rest(this.base+"/:id/sensors/count", {
                get:{method:"GET", params:{id:"@id"}},
               
            });
        }

    }
});