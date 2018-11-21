
// Implementation here
/**
 *
 * @param tasks - List of tasks to be executed
 * @param n - no. of concurrent calls that this method can execute.
 * @param callback - final call after completing all tasks
 * @constructor
 */
function TaskRunner(tasks, n, callback) {
  this.tasks = tasks;
  this.callback = callback;

  // no. of concurrent calls that this method can execute.
  this.n = n;

  // count flag to compare no. of concurrent tasks running.
  // Count flag is incremented/decremented when task is STARTED/COMPLETED.
  this.count  = 0;

  // index - stores the current index of the tasks[] that is STARTED
  this.index = 0;

  // store list of completed task to exit the setInterval loop.
  this.completed = [];
}

TaskRunner.prototype.run = function () { //fn
  if (this.count < this.n) {
    let idx = this.index;
    let task = this.tasks[idx];
    // if task exist
    if (task) {
      console.log("STARTED: Task#", idx + 1);
      this.tasks[idx]((v) => { // fn((v) => {
        console.log("COMPLETED: Task#", idx + 1);
        this.completed.push(this.tasks.slice(idx));
        this.count--;
      });
      this.count++;
      this.index++;
    }

    if (this.completed.length === this.tasks.length) {
      this.stop();
    }
  }
}

TaskRunner.prototype.stop = function () {
  window.clearInterval(this.interval);
  this.callback();
}

TaskRunner.prototype.start = function () {
  // let that = this;
  this.interval = window.setInterval(() => {
    this.run();
  }, 100);
}

/* TaskRunner Implementation */
// helpers
var task1 = function(callback) {
    setTimeout(function() {
        console.log('Executing setTimeout Task 1');
        callback(1);
    }, Math.floor(Math.random() * 1000)); //Math.floor(Math.random() * 1000)
}

var task2 = function(callback) {
    setTimeout(function() {
        console.log('Executing setTimeout Task 2');
        callback(2);
    }, Math.floor(Math.random() * 1000));
}

var task3 = function(callback) {
    setTimeout(function() {
        console.log('Executing setTimeout Task 3');
        callback(3);
    }, Math.floor(Math.random() * 1000));
}
var task4 = function(callback) {
    setTimeout(function() {
        console.log('Executing setTimeout Task 4');
        callback(4);
    }, Math.floor(Math.random() * 1000));
}

var taskRunner = new TaskRunner([task1, task2, task3, task4], 2, function() { //, task4
    console.log('all tasks are done');
});

// console.log("Script loaded...");
taskRunner.start();

/***** TaskRunner Output  *****/
// STARTED: Task# 1
// STARTED: Task# 2
// Executing setTimeout Task 1
// COMPLETED: Task# 1
// STARTED: Task# 3
// Executing setTimeout Task 2
// COMPLETED: Task# 2
// STARTED: Task# 4
// Executing setTimeout Task 3
// COMPLETED: Task# 3
// Executing setTimeout Task 4
// COMPLETED: Task# 4
// all tasks are done
