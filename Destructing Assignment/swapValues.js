function swapValues(a,b){
    const [x,y] = [a,b] ;
    x== y ; y== a ;
    return [y,x];
}

const swappedValues =  swapValues(10,20);
console.log(swappedValues); // [20, 10]