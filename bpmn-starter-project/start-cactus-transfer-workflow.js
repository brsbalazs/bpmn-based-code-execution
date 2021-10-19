var bpmn = require("bpmn");

bpmn.createUnmanagedProcess("/Users/brsbalazs/Dev/bme/szakdolg/bpmn-based-code-execution/bpmn-starter-project/processes/cactus-transfer-workflow.bpmn", function(err, myProcess){

    myProcess.triggerEvent("Start Transfer");

});

