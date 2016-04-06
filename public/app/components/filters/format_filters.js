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
