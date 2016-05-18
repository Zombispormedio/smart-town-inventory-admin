angular.module('Application')
    .factory("ImportService", function(Webworker){


    var importCSV=function(value){
        var result={};
        var elems=value.split("\n").map(function(item){
           return item.split(";"); 
        });

        if(elems.length>1){
            var labels=elems[0];

            var elemsKeys=labels.map(function(item){
                return item.toLowerCase().replace(" ", "_");
            });
            
            result.labels=elemsKeys.reduce(function(p, i, index){
                p[i]=labels[index]; 
                return p;
            }, {});
            
            
            var values=elems.slice(1, elems.length);


            result.data=values.reduce(function(prev, item){
                if(item.length==elemsKeys.length){
                   var obj=item.reduce(function(p, i, index){
                       var key=elemsKeys[index];
                       
                       p[key]=i;
                       
                       
                       return p;
                       
                   }, {});
                    
                    prev.push(obj);
                    
                }                
                return prev;
            }, []);




        }
        return result;
    }

    var CSV=function(value, cb){
        var csvWorker=Webworker.create(importCSV);

        csvWorker.run(value).then(cb);
    }




    return {
        CSV: CSV
    }


});