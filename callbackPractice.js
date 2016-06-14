/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  function first(names, callback) {
    callback(names[0]);
  }
  

const names = [`Tyler`, `Cahlan`, `Ryan`, `Colt`, `Tyler`, `Blaine`, `Cahlan`];
first(names, (firstName)=> {
  console.log(`The first name in names is ` + `${firstName}`)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
  const last = (names, callback) =>{
    callback(names[names.length-1]);
  }

last(names, (lastName) =>{
  console.log(`The last name in names is ` + `${lastName}`);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
  const multiply = (num1, num2, cb) => {return cb(num1 * num2)};


multiply(4, 3, (answer) =>{
  console.log(`The answer is ` + `${answer}`); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
  var contains = (array, name, callback) =>{
    for (let i = 0; i < array.length; i++) {
      if (array[i] === name) {
        return callback(true);
      }
    }
    return callback(false);
  }


contains(names, `Colt`, (result) => {
  if(result === true){
    console.log(`Colt is in the array`);
  } else {
    console.log(`Colt is not in the array`);
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
    const uniq = (names, callback) => {
      let uniqArr = [];
      for (let i = 0; i < names.length; i++) {
        if(uniqArr.indexOf(names[i]) === -1){
          uniqArr.push(names[i]);
        }
      }
      return callback(uniqArr);
    }
      

uniq(names, (uniqArr) => {
  console.log(`The new names array with all the duplicate items removed is `, `${uniqArr}`);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
    const each = (names, callback) => {
      for (let i = 0; i < names.length; i++) {
        callback(names[i], i);
      }
    }

each(names, (item, indice) => {
  console.log(`The item in the ` + `${indice}` + ` position is ` + `${item}`)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

 const getUserById = (users, thisID, callback) => {
   for(let x in users){
    if (users[x].id === thisID) {
      return callback(users[x]);
    }
   }
 }

var users = [
  {
    id: `12d`,
    email: `tyler@gmail.com`,
    name: `Tyler`,
    address: `167 East 500 North`
  },
  {
    id: `15a`,
    email: `cahlan@gmail.com`,
    name: `Cahlan`,
    address: `135 East 320 North`
  },
  {
    id: `16t`,
    email: `ryan@gmail.com`,
    name: `Ryan`,
    address: `192 East 32 North`
  },
];

getUserById(users, '16t', (user) => {
  console.log(`The user with the id 16t has the email of ` + `${user.email}` + ` the name of ` + `${user.name}` + ` and the address of ` + `${user.address}`); 
});
