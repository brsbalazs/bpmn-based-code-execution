var bpmn = require("bpmn");

// We assume there is a myProcess.js besides myProcess.bpmn that contains the handlers



// Unfortunately does not work with relative path ../bpmn/examples/processes/task.bpmn
bpmn.createUnmanagedProcess("/Users/brsbalazs/Dev/bme/szakdolg/bpmn-based-code-execution/bpmn-starter-project/processes/exclusive-gw-custom.bpmn", function(err, myProcess){

    // we start the process
    // The event name should be the handler method name without the underscore characters 
    // e.g.: method Start_Event can be triggered with event name "Start Event"
    myProcess.triggerEvent("Start Event");
 
    // Without the following proces.taskDone calls the tasks are never finished
    // timeout is here to make it asynchronous. In real cases it would be called in reaction to a user interaction, a service request...
    //setTimeout(function(){
    //    myProcess.taskDone("First Task", {});
    //}, 2000);






});

