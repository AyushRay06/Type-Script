function runAfterOneSec(fn: ()=>void){
    setTimeout(fn,1000)
}

function greet(){
    console.log("hello world")
}

runAfterOneSec(greet)