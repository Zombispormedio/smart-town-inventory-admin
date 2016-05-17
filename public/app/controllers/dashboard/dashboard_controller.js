angular.module('Application')
    .controller('DashboardCtrl',function($scope, $rootScope, SensorGridService, ThemeService,  RequestService, $window){


    var query={
        p:0,
        s:5
    }
    $scope.list={
        numItems:0,

        pageSize:0,
        pagination:[],
        query:query,
        numPages:0
    };


    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }


    $scope.create=function(){
        $rootScope.go("application.dashboard.create")
    };

    $scope.openMenu = function($mdOpenMenu, ev) {

        $mdOpenMenu(ev);
    };




    var icons=["carrot", "apple-safari", "barley", "black-mesa", "bone", "bug", "food-fork-drink"];    
    $scope.Icon=function(name){

        var index=name.charCodeAt(0)%icons.length;
        return "mdi-"+icons[index];
    };
    $scope.delete=function(id){
        SensorGridService.Basic().del({id:id},RequestService.Data(function(data){
            $scope.sensor_grids=data;
        }), RequestService.Error());
    };

    $scope.goToDetail=function(id){
        $scope.go("application.dashboard.detail", {id:id});
    }

    var createPagination=function(){
        $scope.list.numPages=Math.ceil($scope.list.numItems/query.s);
        $scope.list.pagination=Array.apply(0, Array($scope.list.numPages)).map(function(_, index){
            return index;
        });
    }

    $scope.changePage=function(){
        fetch();
    }

    $scope.changeSize=function(){
        query.p=0;
        fetch();
    }

    $scope.next=function(){
        var page=query.p+1;
        console.log($scope.list.numPages)
        if(page<$scope.list.numPages){
            query.p++;
            fetch();
        }


    }

    $scope.prev=function(){
        var page=query.p;
        if(page>0){
            query.p--;

            fetch();
        }
    }


    $scope.openTab=function(ev, id){
        if(ev.which===3 && ev.button===2){

            $window.open("#/sensor_grid/"+id,'_blank');
        }
    }

    $scope.search=function(){
        fetch();
    }

    var fetch=function(){

        SensorGridService.Count().get(query, RequestService.Data(function(data){
            $scope.list.numItems=data;

            createPagination();
        }), RequestService.Error());

        SensorGridService.Search().all(query, RequestService.Data(function(data){
            $scope.sensor_grids=data;
        }), RequestService.Error());
    };

    fetch();

});