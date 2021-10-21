/*global module exports console */

// test

export function Start_Transfer( data , done ){
    console.log("CH - Start_Transfer");
    done();
};


export function Lock_Tokens( data , done ){
    console.log("CH - Lock_Tokens");
    this.taskDone("Lock Tokens",{})
    done();
};



export function Evaluate_Transaction_Results( data , done ){
    console.log("CH - Evaluate_Transaction_Results");
    this.taskDone("Evaluate Transaction Results",{})
    done();
};


export function Is_successfully_locked_(data, done) {    
    console.log("CH -Is_successfully_locked_");
    done("true");
};


export function Is_successfully_locked_$yes(data) {
    console.log("CH -Is_successfully_locked_$yes");
    return data == "true"
};

export function Is_successfully_locked_$no(data) {
    console.log("CH - Is_successfully_locked_$no");
    return data == "false"
};

export function Calc_Mintable_Token_Amount( data , done ){
	console.log("CH - Calc_Mintable_Token_Amount");
    this.taskDone("Calc Mintable Token Amount",{})
	done();
};


export function Has_Cactus_Receiver_Got_Enough_Tokens_(data, done) {    
    console.log("CH - Has_Cactus_Receiver_Got_Enough_Tokens_");
    done("true");
};


export function Has_Cactus_Receiver_Got_Enough_Tokens_$yes(data) {
    console.log("CH - Has_Cactus_Receiver_Got_Enough_Tokens_$yes");
    return data == "true"
};

export function Has_Cactus_Receiver_Got_Enough_Tokens_$no(data) {
    console.log("CH - Has_Cactus_Receiver_Got_Enough_Tokens_$no");
    return data == "false"
};

export function Mint_Tokens_With_Receiver( data , done ){
	console.log("CH - Mint_Tokens_With_Receiver_");
    this.taskDone("Mint Tokens With Receiver",{})
	done();
};

export function Has_The_Minting_Been_Successful_(data, done) {    
    console.log("CH - Has_The_Minting_Been_Successful_");
    done("true");
};


export function Has_The_Minting_Been_Successful_$yes(data) {
    console.log("CH - Has_The_Minting_Been_Successful_$yes");
    return data == "true"
};

export function Has_The_Minting_Been_Successful_$no(data) {
    console.log("CH- Has_The_Minting_Been_Successful_$no");
    return data == "false"
};

export function Send_From_Cactus_Receiver_To_Receiver_User( data , done ){
	console.log("CH - Send_From_Cactus_Receiver_To_Receiver_User_");
    this.taskDone("Send From Cactus Receiver To Receiver User",{})
	done();
};

export function Has_The_Transaction_Been_Successful_(data, done) {    
    console.log("CH - Has_The_Transaction_Been_Successful_");
    done("true");
};


export function Has_The_Transaction_Been_Successful_$yes(data) {
    console.log("CH - Has_The_Transaction_Been_Successful_$yes");
    return data == "true"
};

export function Has_The_Transaction_Been_Successful_$no(data) {
    console.log("CH - Has_The_Transaction_Been_Successful_$no");
    return data == "false"
};

export function Initiate_Rollback_On_Home_Ledger( data , done ){
	console.log("CH - Initiate Rollback On Home Ledger");
    this.taskDone("Initiate Rollback On Home Ledger",{})
	done();
};

export function Send_Back_From_Cactus_Sender_To_Sender_User( data , done ){
	console.log("CH - Send Back From Cactus Sender To Sender User");
    this.taskDone("Send Back From Cactus Sender To Sender User",{})
	done();
};

export function Send_Failure_Response( data , done ){
	console.log("CH - Send Failure Response");
    this.taskDone("Send Failure Response",{})
	done();
};



export function Send_Success_Response( data , done ){
	console.log("CH - Send Success Response");
    this.taskDone("Send Success Response",{})
	done();
};




export function End_Transaction( data , done ){
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
 export function defaultEventHandler(eventType, currentFlowObjectName, handlerName, reason, done) {
    // Called, if no handler could be invoked.
    console.log("defaultEventHandler");
    done();
};

export function defaultErrorHandler(error, done) {
    // Called if errors are thrown in the event handlers
    console.log("defaultErrorHandler" + error);
    done();
};

export function onBeginHandler(currentFlowObjectName, data, done) {
    // do something
    console.log("onBeginHandler");
    done(data);
};

export function onEndHandler(currentFlowObjectName, data, done) {
    // do something
    console.log("onEndHandler");
    done(data);
};
