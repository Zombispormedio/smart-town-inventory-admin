angular.module('Application')
    .directive('fileReader', function() {
    return {
        restrict:"A",
        scope:{
            fileReader:"="
        },
        link:function(scope, element){
            
            element.bind("change", function(ev){
               var reader= new FileReader();
                
                reader.onload=function(lev){
                    scope.$apply(function(){
                        scope.fileReader=lev.target.result;
                    });
                }
                reader.readAsDataURL(ev.target.files[0]);
                
            });
            
        }
        
    };
});