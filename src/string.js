function concat(a, b){
    return a + b;
}

function rmspace(a){
    return a.replace(/\s+/g, ''); 
}

function capitols(a){
    return a.toUpperCase();
}

module.exports = {concat, rmspace, capitols};
