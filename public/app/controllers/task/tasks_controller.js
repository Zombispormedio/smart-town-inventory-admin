angular.module('Application')
    .controller('TasksCtrl',function($scope, $rootScope, TaskService, ThemeService,  RequestService){
    
    var self=this;
    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.searchObject={
        text:""
    };
    
    $scope.create=function(){
        var index=$scope.tasks.length;
        var task={display_name:"Task"+index};
         TaskService.Basic().new(task, RequestService.Message(self.All), RequestService.Error());
    }
    
    $scope.update=function(task, index){
         console.log($scope.tasks[index]);
         TaskService.Basic().save({id:task._id},task, RequestService.Data(function(data){
             $scope.tasks[index]=data;
             console.log($scope.tasks[index]);
         }), RequestService.Error());
    }
    
    $scope.delete=function(id){
       
         TaskService.Basic().del({id:id}, RequestService.Data(function(data){
             $scope.tasks=data;
         }), RequestService.Error());
    }
    
    
    
    this.All=function(){
        TaskService.Basic().all( RequestService.Data(function(data){
            $scope.tasks=data;
        }), RequestService.Error());
    }
    this.All();

});