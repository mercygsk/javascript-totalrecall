
 let y=1
 function checknum(x){
 if (y!=0 && y>0){
    return console.log("positive");
 } else {
     return console.log("Negitive");
     
    }

}
 console.log(checknum(6));
 checknum(-6)

 let hour = new Date().getHours();
 if (hour < 20) {
    console.log(hour);

  greeting = "Good day";
} else {
   greeting = "Good evening";
}

console.log(new Date().getMonth());
 let age = 1
        
   if (age>18){ 
   return console.log("accepted");}
   else {
       return console.log("denied");    }
let ageP = 1
        
function pass(ageP) {
     if (ageP>18 ){ 
return console.log("accepted");}
else {
    return console.log("denied"); }
}
pass(5)

let x= -10
 if (x>0 && x>100){
    console.log("num is positive & num is greater than 100");}
     else if(x>=100) {     //     console.log("num is greater than 100");

     }
    else if(x>0 && x<100){
    console.log("num is positive & num is less than 100");
   }
   else if(x<0){
     console.log("num is negitive");
    }

 for (let i=0; i<10; i++)
{console.log(i);
 }
 for (let i=1; i<10; i+=(2))
{console.log(i);
 }
 let xyz="#"
 for (i=1; i<=7; i++){{
     console.log(xyz);
 }
 xyz=xyz.concat("#")
 }
 console.log(4%3);
 console.log(100%10);
 console.log(20%3);

let  movies = ["spiderman","batman","shoeman","snowman"];

 movies.push("frozen","antman");

 movies.unshift('starwars')
 movies = movies.pop()
 movies = movies.shift();
 movies.splice(1);
 console.log(movies);

movies.forEach(function(movie, idx) {
    console.log(idx + ')'+ movie);
 });



 for (i=0; i<movies.length; i++)
 {
     console.log(movies[i]);
 }

 for(let movie of movies) {
 	if (movie === "The Last Airbender") break;
 	console.log(movie);
 }
moviesCopy = [...movies];

moremovies = ["kingkong", ...movies, "contact"];

moviestr = movies.join();
"spaceball,the sting,alien"

console.log(moviesCopy);