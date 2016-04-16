angular.module('Application')
    .factory("TaskService", function(ApiService){
    return {
        base:"task",
        Basic:function(){
            return ApiService.rest(this.base+"/:id", {
                new:{method:"POST", params:{}},
                all:{method:"GET", params:{}},
                save:{method:"PUT", params:{id:"@id"}},
                del:{method:"DELETE", params:{id:"@id"}}

            });
        }
    }
});