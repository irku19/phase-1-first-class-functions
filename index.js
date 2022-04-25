

function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function aNamedFunc(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}