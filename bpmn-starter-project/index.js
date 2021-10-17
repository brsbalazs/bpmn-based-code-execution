var bpmn = require("bpmn");
// We assume there is a myProcess.js besides myProcess.bpmn that contains the handlers

// Unfortunately does not work with relative path ../bpmn/examples/processes/task.bpmn
bpmn.createUnmanagedProcess("/Users/brsbalazs/Dev/bme/szakdolg/bpmn-based-code-execution/bpmn/examples/processes/task.bpmn", function(err, myProcess){

    // we start the process
    myProcess.triggerEvent("MyStart");

});

