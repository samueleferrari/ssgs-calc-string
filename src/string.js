function concat(a, b){
    return a + b;
}

function rmspace(a){
    return a.replace(/\s+/g, ''); 
}

function capitols(a){
    return a.toUpperCase();
}

function lowercase(a){
    return a.toLowerCase();
}

module.exports = {concat, rmspace, capitols, lowercase};
