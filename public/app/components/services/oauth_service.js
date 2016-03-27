angular.module('Application')
    .factory("OAuthService", function(ApiService){
    return {
        base:"oauth",
        login:function(){
            return ApiService.rest(this.base+"/login", {
                _:{method:"POST", params:{}}
            });
        },
        logout:function(){
            return ApiService.rest(this.base+"/logout", {
                _:{method:"GET", params:{}}
            });
        },

        whoiam:function(){
            return ApiService.rest(this.base+"/whoiam", {
                _:{method:"GET", params:{}}
            });
        }
    };
});