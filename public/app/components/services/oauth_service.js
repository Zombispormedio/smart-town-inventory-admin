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
        },
        DisplayName:function(){
            return ApiService.rest(this.base+"/display_name", {
                set:{method:"PUT", params:{}}
            });
        },
        Email:function(){
            return ApiService.rest(this.base+"/email", {
                set:{method:"PUT", params:{}}
            });
        }
    };
});