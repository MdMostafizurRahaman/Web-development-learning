function fibonacci(n){
    if(n == 0){
        return [0];
    }
    if(n == 1){
        return [0, 1];
    }
    else{
        var fibo = fibonacci(n - 1);
        var nest = fibo[n - 1] + fibo[n - 2];
        fibo.push(nest);
        return fibo;
    }
}

var res = fibonacci(10);
console.log(res);