function saveLocal(key, data) {
    localStorage[key] = data;
}

function getLocal(key) {
    return localStorage[key];
}

function deleteLocal(key) {
    localStorage.removeItem(key);
}

function reverse(items){
    var result=items;

    if(result){
        result=_.clone(items).reverse();
    }

    return result;
}

function reverse2d(items){
    var result=items;

    if(result){
        result=_.clone(items).map(function(a){
            return a.reverse();
        });
    }

    return result;
}