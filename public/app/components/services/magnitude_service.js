angular.module('Application')
    .factory("MagnitudeService", function(ApiService){
    return {
        base:"magnitude",
        Basic:function(){
            return ApiService.rest(this.base, {
                new:{method:"POST", params:{}},
                all:{method:"GET", params:{}}
            });
        }
    };
});