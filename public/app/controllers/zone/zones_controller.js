angular.module('Application')
    .controller('ZonesCtrl',function($scope, $rootScope,ThemeService, ZoneService, RequestService, $window){
    
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

    var icons={
        rectangle:"apple-finder",
        circle:"arrow-down-bold-circle-outline",
        polygon:"arrow-down-bold-hexagon-outline"
    };


    $scope.Icon=function(index){
        return "mdi-"+icons[index];
    };

    $scope.goToDetail=function(id){
        $scope.go("application.zones.detail", {id:id});
    }


    $scope.create=function(){
        $rootScope.go("application.zones.create")
    };

    $scope.delete=function(id){
        ZoneService.Basic().del({id:id},RequestService.Data(function(data){
            $scope.zones=data;
        }), RequestService.Error());
    };




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
            
            $window.open("#/zones/"+id,'_blank');
        }
    }

    $scope.search=function(){
            fetch();
    }

    var fetch=function(){

        ZoneService.Count().get(query, RequestService.Data(function(data){
            $scope.list.numItems=data;
            createPagination();
        }), RequestService.Error());

        ZoneService.Search().all(query, RequestService.Data(function(data){
            $scope.zones=data;
        }), RequestService.Error());
    };

    fetch();
});