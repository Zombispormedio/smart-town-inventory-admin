angular.module('Application')
    .controller('ApplicationCtrl', function($rootScope, $scope, OAuthService, RequestService, SensorService, $interval){

    $scope.user={};

	var notifications=null;

    $scope.closePopoverMain=function(){
        $scope.showMain=false;
    }

    $scope.closePopoverOptions=function(){
        $scope.showOptions=false;
    }


    this.WhoIAm=function(){

        OAuthService. whoiam()._(RequestService.OneDataByKey("email", function(data){
            $scope.user.email=data;

        }),RequestService.Error());  

    };

    this.WhoIAm();

    $scope.logout=function(){
        OAuthService.logout()._(function(data){

            deleteLocal("user");
			$interval.cancel(notifications);

            $rootScope.go("login");

        },RequestService.Error());  
    };

    var fetchSensorsNotifications=function(){
        SensorService.Notifications().get(RequestService.Data(function(data){
            $rootScope.notifications=data;

        }), RequestService.Error());
    }

    var icons=["amplifier", "apple-mobileme", "boombox", "chip", "cube", "linux"]

    $scope.Icon=function(name){

        var index=name.charCodeAt(0)%icons.length;
        return "mdi-"+icons[index];
    };


    fetchSensorsNotifications();

    $scope.goToNotificationDetail=function(id){
        $scope.go("application.sensor.detail", {id:id});
    }

    notifications=$interval(function(){
        fetchSensorsNotifications();
    }, 600000)
    
    $scope.$on("$destroy", function(){
       $interval.cancel(notifications); 
    });


});