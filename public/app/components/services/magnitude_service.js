angular.module('Application')
    .factory("MagnitudeService", function(ApiService){
    return {
        base:"magnitude",
        _:function(){
            return ApiService.rest(this.base, {
                new:{method:"POST", params:{}}
            });
        }
    };
});