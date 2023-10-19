
//================================================================
//oct16-jstotalrecall
//================================================================
//let x=10  //varaible assigning 

// console.log(x);
//  x=15
// console.log(x);                       //change variable 

 //with const we cant reassign -wont work with num,string,boolean if u intialize.
 //objects -we use const 

/* How do we assign a value to a variable?
How do we change the value of a variable?
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
declar: let x
assign: let x=5 
define: no difining in JS but in java int-for numbers, string -wordsetc..
What is pseudocoding and why should you do it?//IMP
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?*/

// let firstVaraiable = "hello world"

// firstVaraiable = 10

// secondVaraiable = "helloworld";


// console.log(firstVaraiable,secondVaraiable);

// let myName = "mercy"
// console.log("hello, my name is",  myName);
// // Boolean 
// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b); //=== false <make it true becoz 4<53
//   console.log(c !== d); // this returns true
//   console.log('Name' === 'Name');// ===true as name and name are same
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false); // || - "or" -one is true everthing is true 
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)"-a !== a-d"
//   console.log(a !== a + d); // note: the answer is a simple arithmetic equation, not something "weird"
//    console.log(48 =='48');
// // truty and falsy 
//falsy : null,undefind, 0,-0,""=empty space,NaN-not a number
//truthy: ==, ===,*, &&-if all true - true, if one false everthing is false.
//|| = or one thing is true everthing is true, one false one true - its true.

//typeof-to see what string,num,etc.. 
//Object.values.

// let animal = "dog" 
// if (animal == "cow"){
//     console.log("moooooo");}
//     else 
//     {
//         console.log(`"Hey! You're not a cow."`);
//     }


//     let age =35

//     if (age >=16){
//         console.log("here are the keys!");
//     }
//     else {
//         console.log("Sorry, you're too young.");
//     }

//This is GOOD: for(let i = 0; i < 100; i++)//good practice

// for (let i=0; i<=10; i++)

// {console.log(i);}

// for (let i=0; i<=400; i++)
// // {console.log(i);} 

//  for (let i=12; i<=40; i+=(3)){ ///3nubers, if 2 (2)
//    console.log(i);//third num
//  }

// for (let i=2; i<=100; i+=(2))
// {
// //     console.log(i + " is a even number");
// // }
// //even number 
// for (let i=1; i<=100; i++){
//     if (i%2 === 0){
//         console.log(i + "<-- is an even number");
//     }else {
//         console.log(i);
//     }
// }
// for (let i=5; i<=100; i+=(5)){
//     console.log("I found a "+i+ ". High five!");
// }

// for (let i=1; i<=100; i++){
//     if(i%3==0)
//     console.log("I found a " + i + ". Three is a crowd")
//     if(i%5==0)
//     console.log("I found a "+i+ ". High five!");
// }

// for (let i=0; i<=10; i++)
//  if (i%3==0){
//     console.log("I found a " + i +". Three is a crowd");
//  }
//  else if(i%5==0){
// //     console.log("I found a " + i +". High five!");
// //  }

// let bank_account = 0
// for(let i=1; i<=10; i++){
// bank_account = i+bank_account;}
// console.log(bank_account);

// let bank_account = 0
// for(let i=1; i<=100; i++){
// bank_account = i+(bank_account*2);}
// console.log(bank_account);

// let quotes=["hii","bvjkhikjk","gcvhjjukhujk"
// ];
// // {console.log(quotes);}
// const randomThings = [1, 10, "Hello", true]
// randomThings[2]="world"
// {console.log(randomThings[2])};

// const randomThings = [1, 10, "Hello", true]
// randomThings.push("mom")//adding inti array
// {console.log(randomThings)};

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// ourClass[4]="octocat"
// ourClass.push("cloud city")
// {console.log(ourClass);}
//===========================================================
//Arrays
//============================================================
//const myArray = [5, 10, 500, 20]

// myArray.push("Aegon")
// myArray.shift();//remove an elemnt in arry from first

// myArray.unshift("Bob Marley")
// myArray.pop()
// myArray.reverse();//good
//myArray.sort()
 //{console.log(myArray);}

// {console.log(myArray);}

// let x=110
// if (x<100){
//     console.log("little number");
// }
// else if (x>=100){
//     console.log("big number");
// }
//G//####
// let x=15
// if (x<10){
//     console.log("little number");
// }
// else if(x>10){
//     console.log("big number");
// }
// else{
//     console.log("monkey");
// }

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//  // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
// ]

//     kristynsCloset.splice(6,0,"rayban"); //it should be before marshmall --done 
//     kristynsCloset.splice(5,1, "stained knit hat"); //its correct but check new way

//  {console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");}  //

//   {console.log(kristynsCloset);}



//   {console.log("Thom is looking fierce in a " +thomsCloset[0][0]+", "+ thomsCloset[1][0]+ " and " +thomsCloset[2][1],".");}//access items from different arrays
//   thomsCloset[1][2] = "Footie Pajamas"
//   {console.log(thomsCloset);}
 //========================================================== 
//Functions
//============================================================
//A ############################
function printGreeting(name){
  return `Hello there,  ${name } !`
}
//B #########################################
function printCool(name)
{
  return '"' +name + ' is cool";';
}
//c ###########################################
function calculateCube(n)
{
  return n*n*n;
}
// function calculateCube(number){
//   console.log(number*number*number);
// }
// calculateCube(6)
//D #################################################
function isVowel(x)
{
  const vowels = ["a", "e", "i", "o", "u"]
  if (x.length==1)  
  {
    if(vowels.includes(x.toLowerCase()))
      return true;
    else
      return false;
  }
  else
    return "string length is more than 1 character - please pass single character"

}
//E #####################################################
function getTwoLengths(x,y)
{
  return [x.length, y.length];
}
//F #######################################################
function getMultipleLengths(x)
{
  const array = [];
  for(i=0; i<x.length; i++) 
  {
    array.push(x[i].length);
  }
  return array;
}
//G ###########################################################
function maxOfThree(x,y,z)
{
  const array = [x,y,z];
  console.log(array);
  console.log(array.length);
  let largest=0;
  for(j=0;  j<array.length; j++) {
  if (largest<=array[j]) 
  {
       largest =array[j];
       console.log("what is larget: " + largest);
  } 
}
return largest;
}
  //const a = [x,y,z];
  
  //Math.max(a)
  //console.log(Math.max(a));
  //return Math.max(x,y,z);

//H######################################
function printLongestWord(xyz){
  let lnword = "";
  console.log("lnword length: " + lnword.length);
 for (i=0; i<xyz.length; i++){
  if (lnword.length <= xyz[i].length)
        lnword = xyz[i]
 }
return lnword;
}


// console.log(printGreeting("Smiler"));
// console.log(printCool("Mercy"));
// console.log(calculateCube(5));
// console.log(isVowel("a"));
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// console.log(maxOfThree(5,88,9));
// console.log(printLongestWord(["BoJack", "Princess of America", "Diane", "a", "Max", "Peanutbutter Cup is yummy", "big guy", "Todd"]));
//============================================================
//OBJECTS-key value pairs, A. Make a user object
//==============================================================
//A #######################################################
const user = {
     name: "mercy",
     Email: "mercy.k.@gmail.com",
     Purchased: [],
     age: 25
   
}
//console.log(typeof(user));
//B-B. Update the user
user.Email="kodali.k@gmail.com";
//user.age = user.age+1
user.age++
user.location = "columbus"
user.Purchased.push("carbohydrates")
user.Purchased.push("peace of mind")
user.Purchased.push("Merino jodhpurs")
//console.log(user.Purchased[1]);
//console.log(user);
//E. Object-within-object
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "WA",
  Purchased:[]
}
// console.log(user);
// console.log(user.friend.name);
// console.log(user.friend.location);
// console.log(user.friend.age);
// user.friend.Purchased.push("The latte","carrot","apple","The one ring")
// user.friend.age =55
// console.log(user);
// console.log(user.friend.Purchased[0])
// //LOOPS###################################
// let arryLength = user.Purchased.length;
// for (i=0; i<arryLength; i++){
//      console.log(user.Purchased[i])
// }
///////////////////////////////////////////////
// arryLength = user.friend.Purchased.length;
// for (i=0; i<arryLength; i++){
//   console.log(user.friend.Purshased[i])
// }

//G. Functions can operate on objects: 
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
function updateUser(){
  //console.log(user);
  user.age++
}
updateUser();
user.name = user.name.toUpperCase();
//console.log(user);

function oldAndloud(person){
  person.age++;
  person.name = person.name.toUpperCase
}
oldAndloud(user);
//console.log(user);
/////////////////////////////////////////////////////////////

 const cat1 = {
        name : "mama cat",
        breed: "puffy",
        age: 5
}
//console.log (cat1.age)
//console.log (cat1.breed)
const cat2 = {
  name : "papa cat",
  breed: "puffy2",
  age: 10
}
//console.log (cat2.age)
//console.log (cat2.breed)
//console.log(cat1)
 function combineCats(mamacat,papacat){
  console.log(mamacat,papacat); 

 }
 console.log(cat1,cat2);