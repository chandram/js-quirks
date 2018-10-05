var hasError = false;
function doAsync () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      console.log("Executing..");

      if (hasError) {
        reject("Error");

      } else
        resolve("Success");
    }, 15000)
  });
}

doAsync().then(
(success) =>  console.log("Completed Aysnc task--> ", success),
(error) =>  {
    console.log("Completed Aysnc task--> ", error)
    throw new Error("Error in promise");
  }
)
.then(() => console.log("Then 1"))
.then(() => console.log("Then 2"))
.catch((ex) => console.log("Catch error ", ex))
;


//Immediately resolved Promise
