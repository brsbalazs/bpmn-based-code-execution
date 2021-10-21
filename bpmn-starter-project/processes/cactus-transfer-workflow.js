"use strict";
/*global module exports console */
exports.__esModule = true;
exports.onEndHandler = exports.onBeginHandler = exports.defaultErrorHandler = exports.defaultEventHandler = exports.End_Transaction = exports.Send_Success_Response = exports.Send_Failure_Response = exports.Send_Back_From_Cactus_Sender_To_Sender_User = exports.Initiate_Rollback_On_Home_Ledger = exports.Has_The_Transaction_Been_Successful_$no = exports.Has_The_Transaction_Been_Successful_$yes = exports.Has_The_Transaction_Been_Successful_ = exports.Send_From_Cactus_Receiver_To_Receiver_User = exports.Has_The_Minting_Been_Successful_$no = exports.Has_The_Minting_Been_Successful_$yes = exports.Has_The_Minting_Been_Successful_ = exports.Mint_Tokens_With_Receiver = exports.Has_Cactus_Receiver_Got_Enough_Tokens_$no = exports.Has_Cactus_Receiver_Got_Enough_Tokens_$yes = exports.Has_Cactus_Receiver_Got_Enough_Tokens_ = exports.Calc_Mintable_Token_Amount = exports.Is_successfully_locked_$no = exports.Is_successfully_locked_$yes = exports.Is_successfully_locked_ = exports.Evaluate_Transaction_Results = exports.Lock_Tokens = exports.Start_Transfer = void 0;
// test
function Start_Transfer(data, done) {
    console.log("CH - Start_Transfer");
    done();
}
exports.Start_Transfer = Start_Transfer;
;
function Lock_Tokens(data, done) {
    console.log("CH - Lock_Tokens");
    this.taskDone("Lock Tokens", {});
    done();
}
exports.Lock_Tokens = Lock_Tokens;
;
function Evaluate_Transaction_Results(data, done) {
    console.log("CH - Evaluate_Transaction_Results");
    this.taskDone("Evaluate Transaction Results", {});
    done();
}
exports.Evaluate_Transaction_Results = Evaluate_Transaction_Results;
;
function Is_successfully_locked_(data, done) {
    console.log("CH -Is_successfully_locked_");
    done("true");
}
exports.Is_successfully_locked_ = Is_successfully_locked_;
;
function Is_successfully_locked_$yes(data) {
    console.log("CH -Is_successfully_locked_$yes");
    return data == "true";
}
exports.Is_successfully_locked_$yes = Is_successfully_locked_$yes;
;
function Is_successfully_locked_$no(data) {
    console.log("CH - Is_successfully_locked_$no");
    return data == "false";
}
exports.Is_successfully_locked_$no = Is_successfully_locked_$no;
;
function Calc_Mintable_Token_Amount(data, done) {
    console.log("CH - Calc_Mintable_Token_Amount");
    this.taskDone("Calc Mintable Token Amount", {});
    done();
}
exports.Calc_Mintable_Token_Amount = Calc_Mintable_Token_Amount;
;
function Has_Cactus_Receiver_Got_Enough_Tokens_(data, done) {
    console.log("CH - Has_Cactus_Receiver_Got_Enough_Tokens_");
    done("true");
}
exports.Has_Cactus_Receiver_Got_Enough_Tokens_ = Has_Cactus_Receiver_Got_Enough_Tokens_;
;
function Has_Cactus_Receiver_Got_Enough_Tokens_$yes(data) {
    console.log("CH - Has_Cactus_Receiver_Got_Enough_Tokens_$yes");
    return data == "true";
}
exports.Has_Cactus_Receiver_Got_Enough_Tokens_$yes = Has_Cactus_Receiver_Got_Enough_Tokens_$yes;
;
function Has_Cactus_Receiver_Got_Enough_Tokens_$no(data) {
    console.log("CH - Has_Cactus_Receiver_Got_Enough_Tokens_$no");
    return data == "false";
}
exports.Has_Cactus_Receiver_Got_Enough_Tokens_$no = Has_Cactus_Receiver_Got_Enough_Tokens_$no;
;
function Mint_Tokens_With_Receiver(data, done) {
    console.log("CH - Mint_Tokens_With_Receiver_");
    this.taskDone("Mint Tokens With Receiver", {});
    done();
}
exports.Mint_Tokens_With_Receiver = Mint_Tokens_With_Receiver;
;
function Has_The_Minting_Been_Successful_(data, done) {
    console.log("CH - Has_The_Minting_Been_Successful_");
    done("true");
}
exports.Has_The_Minting_Been_Successful_ = Has_The_Minting_Been_Successful_;
;
function Has_The_Minting_Been_Successful_$yes(data) {
    console.log("CH - Has_The_Minting_Been_Successful_$yes");
    return data == "true";
}
exports.Has_The_Minting_Been_Successful_$yes = Has_The_Minting_Been_Successful_$yes;
;
function Has_The_Minting_Been_Successful_$no(data) {
    console.log("CH- Has_The_Minting_Been_Successful_$no");
    return data == "false";
}
exports.Has_The_Minting_Been_Successful_$no = Has_The_Minting_Been_Successful_$no;
;
function Send_From_Cactus_Receiver_To_Receiver_User(data, done) {
    console.log("CH - Send_From_Cactus_Receiver_To_Receiver_User_");
    this.taskDone("Send From Cactus Receiver To Receiver User", {});
    done();
}
exports.Send_From_Cactus_Receiver_To_Receiver_User = Send_From_Cactus_Receiver_To_Receiver_User;
;
function Has_The_Transaction_Been_Successful_(data, done) {
    console.log("CH - Has_The_Transaction_Been_Successful_");
    done("true");
}
exports.Has_The_Transaction_Been_Successful_ = Has_The_Transaction_Been_Successful_;
;
function Has_The_Transaction_Been_Successful_$yes(data) {
    console.log("CH - Has_The_Transaction_Been_Successful_$yes");
    return data == "true";
}
exports.Has_The_Transaction_Been_Successful_$yes = Has_The_Transaction_Been_Successful_$yes;
;
function Has_The_Transaction_Been_Successful_$no(data) {
    console.log("CH - Has_The_Transaction_Been_Successful_$no");
    return data == "false";
}
exports.Has_The_Transaction_Been_Successful_$no = Has_The_Transaction_Been_Successful_$no;
;
function Initiate_Rollback_On_Home_Ledger(data, done) {
    console.log("CH - Initiate Rollback On Home Ledger");
    this.taskDone("Initiate Rollback On Home Ledger", {});
    done();
}
exports.Initiate_Rollback_On_Home_Ledger = Initiate_Rollback_On_Home_Ledger;
;
function Send_Back_From_Cactus_Sender_To_Sender_User(data, done) {
    console.log("CH - Send Back From Cactus Sender To Sender User");
    this.taskDone("Send Back From Cactus Sender To Sender User", {});
    done();
}
exports.Send_Back_From_Cactus_Sender_To_Sender_User = Send_Back_From_Cactus_Sender_To_Sender_User;
;
function Send_Failure_Response(data, done) {
    console.log("CH - Send Failure Response");
    this.taskDone("Send Failure Response", {});
    done();
}
exports.Send_Failure_Response = Send_Failure_Response;
;
function Send_Success_Response(data, done) {
    console.log("CH - Send Success Response");
    this.taskDone("Send Success Response", {});
    done();
}
exports.Send_Success_Response = Send_Success_Response;
;
function End_Transaction(data, done) {
    console.log("CH - End Transaction");
    done();
}
exports.End_Transaction = End_Transaction;
;
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
function defaultEventHandler(eventType, currentFlowObjectName, handlerName, reason, done) {
    // Called, if no handler could be invoked.
    console.log("defaultEventHandler");
    done();
}
exports.defaultEventHandler = defaultEventHandler;
;
function defaultErrorHandler(error, done) {
    // Called if errors are thrown in the event handlers
    console.log("defaultErrorHandler" + error);
    done();
}
exports.defaultErrorHandler = defaultErrorHandler;
;
function onBeginHandler(currentFlowObjectName, data, done) {
    // do something
    console.log("onBeginHandler");
    done(data);
}
exports.onBeginHandler = onBeginHandler;
;
function onEndHandler(currentFlowObjectName, data, done) {
    // do something
    console.log("onEndHandler");
    done(data);
}
exports.onEndHandler = onEndHandler;
;
