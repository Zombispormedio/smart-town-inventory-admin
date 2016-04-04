angular.module('Application')
    .factory("ThemeService", function($rootScope){


    return {
      Content:function(scope,class_name){
          var element=document.getElementById("content");
       
          if(element){
              element.classList.add(class_name);
              
              scope.$on("$destroy", function(){
                
                    element.classList.remove(class_name);
              });
          }
      }
    }
});