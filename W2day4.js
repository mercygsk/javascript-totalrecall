// let i=10;
// while(i>0){

//     console.log(i);
//     i --;
// }
// // for (i=10; i>0; i--){
// //     console.log(i);
// // }

// // let i=10;
// // while (i>5){
// //     console.log(i);
// // i --;
// // }

// // let i=5;
// // while (i<=100){
// //     console.log(i);
// // i=i+5;
// // }

// // let i=1;
// // while (i*3<=35){
// //     console.log(i*3);
// // i ++;
// // }

// // let i=0;
// // while(i<=20){
// //     if (i%2==0)
// //     console.log("value " +i + "  "+ i*3);
// //     i++;
// // }

// // for (i=0; i<=Math.sqrt; i++)
// //   {
// // if (i%2 == 1 )
// // {console.log("i");}

// //   }

 
//   for (let i = 2; i < 50; i ++){
//     isPrime = true;
//     for (j=2; j<i; j++){
//         if (i%j == 0){
//             isPrime = false;
//         }
//     }
//     if (isPrime){
//             console.log("value" +i + '' +"prime");
//     }
// }

for (let i=2; i<20; i++){
prime = true;
 for (j=2; j<i; j++){
   if(i%j==0){
    prime = false;
   }
 }
 if (prime){
    console.log(i);
 }
}

// let i = 1
// while (i){

//     console.log("coin: " + i);
//     i++;
// }

// int calculate_quarters(int cents)
// {
//     int count = 0;
//     while (cents >= 25)
//     {
//         count++;
//         cents %= 25;
//     }
//     return count;
// }

// function calculate_quarters(dollars)
// {
//     let count = 0;
//     let cents = dollars * 100;
//     while (cents >= 25)
//     {
//         count++;
//         if(cents % 25 == 0)
//         console.log("quarter: " + cents/25);
//         cents=cents-25;
//     }   
//     return count;
// }
// cookie_cost=4;
// paid_amount=10;
// console.log("total quarters returned: " + calculate_quarters(paid_amount-cookie_cost));

// //console.log(100%25)

// function add(x,y,z,w){

//     let t;
// t=x+y+z+w;
//     return t;

// }
// console.log(add(32,23,342,23));

// let addDiv = (x,y,z) => (x+y+z)/3;

// console.log(addDiv(8,5,5));

// let quarter=(x,y) =>(x-y)*4;

// console.log(quarter(20,2));

// 100-$27.83 -bills he got?