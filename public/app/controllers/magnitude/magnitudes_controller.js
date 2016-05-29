angular.module('Application')
    .controller('MagnitudesCtrl',function($scope, $rootScope, MagnitudeService, RequestService, ThemeService, $window){

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
        $rootScope.go("application.magnitudes.create")
    };
    var types=["ANALOG", "DIGITAL"]

    var icons=["record", "adjust"];

    $scope.Icon=function(index){
        return "mdi-"+icons[index];
    };

    $scope.Type=function(index){
        return types[index];
    };

    $scope.delete=function(id){
        MagnitudeService.Basic().del({id:id},fetch, RequestService.Error());
    };

    $scope.goToDetail=function(id){
        $scope.go("application.magnitudes.detail", {id:id});
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
            
            $window.open("#/magnitudes/"+id,'_blank');
        }
    }

    $scope.search=function(){
            fetch();
    }

    var fetch=function(){

        MagnitudeService.Count().get(query, RequestService.Data(function(data){
            $scope.list.numItems=data;
            createPagination();
        }), RequestService.Error());

        MagnitudeService.Search().all(query, RequestService.Data(function(data){
            $scope.magnitudes=data;
        }), RequestService.Error());
    };

    fetch();
});