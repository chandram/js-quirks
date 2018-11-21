// helpers
var task1 = function(callback) {
    setTimeout(function() {
        console.log('Executing setTimeout Task 1');
        callback(1);
    }, 2000); //Math.floor(Math.random() * 1000)
}

var task2 = function(callback) {
    setTimeout(function() {
        console.log('Executing setTimeout Task 2');
        callback(2);
    }, 4000);
}

var task3 = function(callback) {
    setTimeout(function() {
        console.log('Executing setTimeout Task 3');
        callback(3);
    }, 2000);
}
var task4 = function(callback) {
    setTimeout(function() {
        console.log('Executing setTimeout Task 4');
        callback(4);
    }, 2000);
}

// ------1-------3------------5
// ------2---------4-----6

// Implementation here

// javascript functional programming running tasks at different intervals
// https://stackoverflow.com/questions/20365971/timing-in-js-multiple-setintervals-running-at-once-and-starting-at-the-same-ti
// Usage


//taskRunner.run();

function TaskRunner(tasks, n, callback) {
  this.tasks = tasks;
  this.n = n;
  this.callback = callback;
  this.count  = 0;
  this.index = 0;
  this.completed = [];

  // this.run = () => {
  //     console.log("IN start ", this.count, " (n)-> ", this.n);
  //     if (this.count < this.n) {
  //       let idx = this.index;
  //       console.log(" Index ", idx, this.index);
  //       this.tasks[idx]((v) => { // fn((v) => {
  //         console.log("Completed! Task Index ", idx, " -- ",  v);
  //         this.completed.push(this.tasks.splice(idx));
  //         this.count--;
  //       });
  //       this.count++;
  //       this.index++;
  //     } else {
  //       console.log("Else loop reached.. ", this.count, " (n)-> ", this.n);
  //       this.stop();
  //     }
  //   }
}

TaskRunner.prototype.run1 = function () {
    // tasks completed.
    let taskList = [];
    for (let index in this.tasks) {
      // task(function (id) {
      //   taskList.push(id)
      // });
      // console.log(this.tasks[index]);
      this.start(this.tasks[index]);
    }
    // this.callback();
}

TaskRunner.prototype.run = function () { //fn
  // console.log("IN start this.count-> ", this.count, " (n)-> ", this.n);
  if (this.count < this.n) {
    let idx = this.index;
    // console.log(" Index ", idx, this.index);
    let task = this.tasks[idx];
    if (task) {
      console.log("Started: Task#", idx + 1);
      this.tasks[idx]((v) => { // fn((v) => {
        // console.log("Completed! Task  ", idx + 1, " -- ",  v, " -- " , this.completed.length);
        console.log("Completed: Task#", idx + 1);
        this.completed.push(this.tasks.slice(idx));
        this.count--;
      });
      this.count++;
      this.index++;
    }

    if (this.completed.length === this.tasks.length) {
      this.stop();
    }

  } else {
    // console.log("Else loop reached.. ", this.count, " (n)-> ", this.n);
    // this.stop();
  }
}

TaskRunner.prototype.stop = function () {
  // console.log("Stop called.. All task completed ", this.tasks);
  window.clearInterval(this.interval);
  this.callback();
}

TaskRunner.prototype.start = function () {
  let that = this;
  this.interval = window.setInterval(function() {
    that.run();
  }, 100);
}

var taskRunner = new TaskRunner([task1, task2, task3, task4], 2, function() { //, task4
    console.log('all tasks are done');
});

// window.setInterval(taskRunner.ontick, 10);

console.log("Script loaded...");
taskRunner.start();
// window.setInterval(function() {
//   taskRunner.run();
// }, 10);
