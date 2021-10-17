# Demo Project Using bpmn node package
https://www.npmjs.com/package/bpmn or https://github.com/e2ebridge/bpmn

A demo project for experimenting with bpmn based code execution solutions.

Since the used package is an old one, and it is no longer being updated by developers, it has some dependency issues. To solve this I decided to use it as a local dependency, in case I have to make any updates on the source code of the library.

Launch project with an example bpmn:
1. npm install on the bpmn folder
2. npm install on the bpmn-starter-project folder


Updates on bpmn library:
 - Winston dependency version fixed to "0.7.1 - 2.4.4"

<br>

# Experiences:

## 1. Tasks are not finished by their own - using process.taskDone

![simple-workflow](./documentation/img/two-task-workflow.png)

I experienced that, the process always stops and exists at the first task of the given workflow. The bellow example shows a process stopped at the middle without any warning. ( It also contains handler method calls. )

```
> node index.js
onBeginHandler
MyStart
onEndHandler
onBeginHandler
MyTask1
```
That is because no one is callink their taskDone method, so the task could not be considered as finished. After updating the file which starts the whole process with taskDone calls wrapped in timeouts for all tasks, the tasks are no longer considered unfinished, and the process could finally finish.

```
    myProcess.triggerEvent("MyStart");

    setTimeout(function(){
        myProcess.taskDone("MyTask1", {});
    }, 2000);

    setTimeout(function(){
        myProcess.taskDone("MyTask2", {});
    }, 4000);

```

The result including handler calls:
```
> node index.js
onBeginHandler
MyStart
onEndHandler
onBeginHandler
MyTask1
MyTask1Done
onEndHandler
onBeginHandler
MyTask2
MyTask2Done
onEndHandler
onBeginHandler
MyEnd
onEndHandler
```


