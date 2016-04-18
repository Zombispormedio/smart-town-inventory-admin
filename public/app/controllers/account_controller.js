angular.module('Application')
    .controller('AccountCtrl', function($rootScope, $scope, OAuthService, RequestService, $mdDialog){

    $scope.goBack=function(){
        $rootScope.go("application.dashboard.list");
    }

    $scope.editable={
        display_name:false,
        email:false
    }


    $scope.changeDisplayName=function(){
        var result=_.pick($scope.account, ["display_name"]);
        OAuthService.DisplayName().set(result, RequestService.Data(function(data){
            $scope.account=data;
            $scope.editable.display_name=false;
        }), RequestService.Error());
    }

    $scope.changeEmail=function(){
        var result=_.pick($scope.account, ["email"]);
        OAuthService.Email().set(result, RequestService.Data(function(data){
            $scope.account=data;
            $scope.editable.email=false;
        }), RequestService.Error());
    }

    this.WhoIAm=function(){

        OAuthService.whoiam()._(RequestService.Data(function(data){
            $scope.account=data;

        }),RequestService.Error());  

    };

    this.WhoIAm();


    $scope.OpenPasswordDialog=function(ev){

        $mdDialog.show({
            controller: function($scope, $mdDialog){

                $scope.user={
                    password:"",
                    repeat_password:""
                }
                $scope.errors={
                    Empty:false,
                    Equals:false
                }
                $scope.hide = function() {
                    $mdDialog.hide();
                };
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };

                var checkErrors=function(){
                    $scope.errors.Empty=$scope.user.password===""||$scope.user.repeat_password==="";
                    $scope.errors.Equals=!$scope.errors.Empty&&($scope.user.password!==$scope.user.repeat_password);

                    return $scope.errors.Empty&&$scope.errors.Equals;
                }
                $scope.confirm = function() {

                    if(!checkErrors())
                        $mdDialog.hide($scope.user);
                };

            },
            templateUrl: '/views/_application/_account/password.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true


        })
            .then(function(user){
            var result=_.pick(user, ["password"]);
            OAuthService.Password().set(result, RequestService.Data(function(data){
                $scope.account=data;

            }), RequestService.Error());
        });
    }

    $scope.deleteAccount=function(ev){
        var confirm = $mdDialog.confirm()
        .title('Would you like to delete your account')
        .textContent("Don't let me")
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Confirm')
        .cancel('Cancel');
        $mdDialog.show(confirm).then(function() {
            OAuthService.Basic().del(RequestService.Message(function(){
                 deleteLocal("user");
                $rootScope.go("login");
            }), RequestService.Error());
            
            
        });
    }


});