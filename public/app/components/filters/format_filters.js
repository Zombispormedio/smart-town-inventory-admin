angular.module('Application').filter(
    "nofirst", function(){
        return function(input) {
            return input?input.slice(1):"";
        }}
)


angular.module('Application').filter(
    "search", function(){
        return function(items,field, searchObject) {
            var text=searchObject.text;
            var result=items;
            if(items && text!==""){
                var regex=new RegExp("^"+text.toLowerCase(), "g");
                result=items.filter(function(a){
                    var elem=a[field].toLowerCase();
                    var test=regex.test(elem);

                    return test;
                });
            }
            return result;
        }}
)


angular.module('Application').filter(
    "reverse", function(){
        return function(items) {
           var result=items;
            
            if(result){
                result=_.clone(items).reverse();
            }
            
            return result;
        }}
)

angular.module('Application').filter(
    "reverse2d", function(){
        return function(items) {
           var result=items;
            
            if(result){
                result=_.clone(items).map(function(a){
                    return a.reverse();
                });
            }
            
            return result;
        }}
)


angular.module('Application').filter(
    "fill", function(){
        return function(items, zeros) {
            var len=items.toString().length;
            
            
            var result=items;
            
            if(len<zeros){
                result=_.repeat("0", zeros-len)+items;
            }
            
            return result;
        }}
);