const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // Database calls, cryptography, network -- uses
  setTimeout(function () {
    // console.log("Async task is completed");
    resolve(); //must be written to connect--> .then
  }, 1000);
});

promiseOne.then(function () {
  //   console.log("Promise consumed");
});

//To take whole data
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ankit", phNo: 7361 });
  }, 1000);
});

promiseTwo.then(function (data) {
  // console.log(data);
});

//To take a particular data and use of then(when complete) and catch(when get error)
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "Ankit", roll: 93, status: "bachelour" });
    } else {
      reject("ERROR: 404. Something went wrong");
    }
  }, 1000);
});

promiseThree
  .then(function (info) {
    // console.log(info);
    // console.log(info.name);  //possible but use .then again for better code
    return info.status;
  })
  .then((status) => {
    // console.log(status);
  })
  .catch(function (error) {
    // console.log(error);
  });
//   .finally(() => console.log("Promise is either resolve or rejected"));

/*
  When making async requests, you can either use "then()" or async/await.
  The difference is that in an async function, Javascript will 
  pause the function execution until the promise settles.
  With 'then()', the rest of the function will continue to execute but Javascript 
  won't execute the '.then()' callback untill the promise settles.
*/

//Using async and await
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "peter", password: "spidey" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFour() {
  try {
    const response = await promiseFour;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFour();

//////////////Example with real data.//////////////// Using async and await
/*
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json(); //wait till all the data convert into json format.
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsers();
*/

//////////////// Using promise/////////////
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
