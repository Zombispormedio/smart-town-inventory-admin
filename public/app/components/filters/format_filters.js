angular.module('Application').filter(
    "nofirst", function(){
        return function(input) {
            return input?input.slice(1):"";
        }}
)
