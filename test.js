/* let sum  = 0 
for(let i=1; i<11;i++){
    console.log(i);
    sum =i+sum 
    console.log("sum: ",sum); */

/* } */
let number =15
let count =0
for( let i=1 ; i<=number;i++){
    let total =number%i;
    
    if( total ===0){
        count++
        console.log(i," is a factor of ", number)
    }
}
console.log("total count of factors of ",number," is ",count)
if( count ===2){
    console.log(number," is a prime number")
}
else
{
    console.log( number," is not a prime number")
}