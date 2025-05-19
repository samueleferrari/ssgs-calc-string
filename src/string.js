function concat(a, b){
    return a + b;
}

function rmspace(a){
    return a.replace(/\s+/g, ''); 
}

module.exports = {concat, rmspace};
