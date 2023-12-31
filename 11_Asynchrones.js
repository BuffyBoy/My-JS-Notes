/*function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

//Callback Hell or Nested Callbacks
getData(1, () => {
  console.log("getting data 2...");
  getData(2, () => {
    console.log("getting data 3...");
    getData(3, () => {
      console.log("getting data 4...");
      getData(4);
    });
  });
});*/


/*Promises
function asyncFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    })
};

function asyncFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    })
};

console.log("fetching data1 ...");
asyncFun1().then((res) => {
    console.log("fetching data2 ...");
    asyncFun2().then((res) => {})
});*/


//Async-awaite
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1", dataId);
            resolve("success");
        }, 2000);
    })
};

//aam zindagi

async function getAllData() {
    console.log("getting data1 ...");
    await getData(1);
    console.log("getting data2 ...");
    await getData(2);
}

//IIFE wali zindagi same funtion k lie

(
    async function getAllData() {
        console.log("getting data1 ...");
        await getData(1);
        console.log("getting data2 ...");
        await getData(2);
    }
)();