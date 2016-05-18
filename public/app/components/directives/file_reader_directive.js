angular.module('Application')
    .directive('fileReader', function() {
    return {
        restrict:"A",
        scope:{
            onfilechange:"=",
            fileReader:"=",
            encoding:"="
        },
        link:function(scope, element){
            
            element.bind("change", function(ev){
               
               var reader= new FileReader();
                
                reader.onload=function(lev){
                    scope.$apply(function(){
                        
                        var result=lev.target.result;
                        if(scope.fileReader){
                               scope.fileReader=result;
                        }
                        
                        if(scope.onfilechange){
                               scope.onfilechange(result)
                        }
                        
                    
                        
                     
                    });
                }
                
                if(scope.encoding){
                     reader.readAsText(ev.target.files[0], scope.encoding);
                }else{
                   reader.readAsText(ev.target.files[0]); 
                }

            });
                
            
        }
        
    };
});