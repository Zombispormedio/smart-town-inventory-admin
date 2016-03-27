function saveLocal(key, data) {
    localStorage[key] = data;
}

function getLocal(key) {
    return localStorage[key];
}

function deleteLocal(key) {
    localStorage.removeItem(key);
}