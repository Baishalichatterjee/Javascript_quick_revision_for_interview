let counter=0;
function getData(){
    console.log("fetch data" + counter++);
}

function myDebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            call();
        }, d);
    }
}
const BetterFunction = myDebounce(getData,5000);