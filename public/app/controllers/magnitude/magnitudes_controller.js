angular.module('Application')
    .controller('MagnitudesCtrl',function($scope, $rootScope, MagnitudeService, RequestService, ThemeService){

    var query={
        p:0,
        s:5
    }
    $scope.page={
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

    $scope.searchObject={
        text:""
    };

    $scope.Icon=function(index){
        return "mdi-"+icons[index];
    };

    $scope.Type=function(index){
        return types[index];
    };

    $scope.delete=function(id){
        MagnitudeService.Basic().del({id:id},RequestService.Data(function(data){
            $scope.magnitudes=data;
        }), RequestService.Error());
    };

    $scope.goToDetail=function(id){
        $scope.go("application.magnitudes.detail", {id:id});
    }

     var createPagination=function(){
        $scope.page.numPages=Math.ceil($scope.page.numItems/query.s);
        $scope.page.pagination=Array.apply(0, Array($scope.page.numPages)).map(function(_, index){
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
        var page=$scope.page.query.p;
        if(page<$scope.page.numPages){
            $scope.page.query.p++;
            fetch();
        }


    }

    $scope.prev=function(){
        var page=$scope.page.query.p;
        if(page>0){
            $scope.page.query.p--;
            console.log(query)
            fetch();
        }
    }




    var fetch=function(){

        MagnitudeService.Count().get(query, RequestService.Data(function(data){
            $scope.page.numItems=data;
            createPagination();
        }), RequestService.Error());

        MagnitudeService.Search().all(query, RequestService.Data(function(data){
            $scope.magnitudes=data;
        }), RequestService.Error());
    };

    fetch();
});