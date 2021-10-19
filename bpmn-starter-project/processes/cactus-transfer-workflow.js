/*global module exports console */


exports.Start_Transfer = function( data , done ){
    console.log("CH - Start_Transfer");
    done();
};


exports.Lock_Tokens = function( data , done ){
    console.log("CH - Lock_Tokens");
    this.taskDone("Lock Tokens",{})
    done();
};



exports.Evaluate_Transaction_Results = function( data , done ){
    console.log("CH - Evaluate_Transaction_Results");
    this.taskDone("Evaluate Transaction Results",{})
    done();
};


exports.Is_successfully_locked_ = function(data, done) {    
    console.log("CH -Is_successfully_locked_");
    done("true");
};


exports.Is_successfully_locked_$yes = function(data) {
    console.log("CH -Is_successfully_locked_$yes");
    return data == "true"
};

exports.Is_successfully_locked_$no = function(data) {
    console.log("CH - Is_successfully_locked_$no");
    return data == "false"
};

exports.Calc_Mintable_Token_Amount = function( data , done ){
	console.log("CH - Calc_Mintable_Token_Amount");
    this.taskDone("Calc Mintable Token Amount",{})
	done();
};


exports.Has_Cactus_Receiver_Got_Enough_Tokens_ = function(data, done) {    
    console.log("CH - Has_Cactus_Receiver_Got_Enough_Tokens_");
    done("true");
};


exports.Has_Cactus_Receiver_Got_Enough_Tokens_$yes = function(data) {
    console.log("CH - Has_Cactus_Receiver_Got_Enough_Tokens_$yes");
    return data == "true"
};

exports.Has_Cactus_Receiver_Got_Enough_Tokens_$no = function(data) {
    console.log("CH - Has_Cactus_Receiver_Got_Enough_Tokens_$no");
    return data == "false"
};

exports.Mint_Tokens_With_Receiver = function( data , done ){
	console.log("CH - Mint_Tokens_With_Receiver_");
    this.taskDone("Mint Tokens With Receiver",{})
	done();
};

exports.Has_The_Minting_Been_Successful_ = function(data, done) {    
    console.log("CH - Has_The_Minting_Been_Successful_");
    done("true");
};


exports.Has_The_Minting_Been_Successful_$yes = function(data) {
    console.log("CH - Has_The_Minting_Been_Successful_$yes");
    return data == "true"
};

exports.Has_The_Minting_Been_Successful_$no = function(data) {
    console.log("CH- Has_The_Minting_Been_Successful_$no");
    return data == "false"
};

exports.Send_From_Cactus_Receiver_To_Receiver_User = function( data , done ){
	console.log("CH - Send_From_Cactus_Receiver_To_Receiver_User_");
    this.taskDone("Send From Cactus Receiver To Receiver User",{})
	done();
};

exports.Has_The_Transaction_Been_Successful_ = function(data, done) {    
    console.log("CH - Has_The_Transaction_Been_Successful_");
    done("true");
};


exports.Has_The_Transaction_Been_Successful_$yes = function(data) {
    console.log("CH - Has_The_Transaction_Been_Successful_$yes");
    return data == "true"
};

exports.Has_The_Transaction_Been_Successful_$no = function(data) {
    console.log("CH - Has_The_Transaction_Been_Successful_$no");
    return data == "false"
};

exports.Initiate_Rollback_On_Home_Ledger = function( data , done ){
	console.log("CH - Initiate Rollback On Home Ledger");
    this.taskDone("Initiate Rollback On Home Ledger",{})
	done();
};

exports.Send_Back_From_Cactus_Sender_To_Sender_User = function( data , done ){
	console.log("CH - Send Back From Cactus Sender To Sender User");
    this.taskDone("Send Back From Cactus Sender To Sender User",{})
	done();
};

exports.Send_Failure_Response = function( data , done ){
	console.log("CH - Send Failure Response");
    this.taskDone("Send Failure Response",{})
	done();
};



exports.Send_Success_Response = function( data , done ){
	console.log("CH - Send Success Response");
    this.taskDone("Send Success Response",{})
	done();
};




exports.End_Transaction = function( data , done ){
	console.log("CH - End Transaction");
	done();
};


/**
 * @param {String} eventType Possible types are: "activityFinishedEvent", "callHandler"
 * @param {String?} currentFlowObjectName The current activity or event
 * @param {String} handlerName
 * @param {String} reason Possible reasons:
 *                          - no handler given
 *                          - process is not in a state to handle the incoming event
 *                          - the event is not defined in the process
 *                          - the current state cannot be left because there are no outgoing flows
 */
 exports.defaultEventHandler = function(eventType, currentFlowObjectName, handlerName, reason, done) {
    // Called, if no handler could be invoked.
    console.log("defaultEventHandler");
    done();
};

exports.defaultErrorHandler = function(error, done) {
    // Called if errors are thrown in the event handlers
    console.log("defaultErrorHandler" + error);
    done();
};

exports.onBeginHandler = function(currentFlowObjectName, data, done) {
    // do something
    console.log("onBeginHandler");
    done(data);
};

exports.onEndHandler = function(currentFlowObjectName, data, done) {
    // do something
    console.log("onEndHandler");
    done(data);
};
