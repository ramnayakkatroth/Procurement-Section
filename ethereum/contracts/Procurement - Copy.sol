pragma solidity ^0.4.17;
contract Procurement{
  address public Pmanager;
  address public VC;
  struct Request{
    string description;
    address sender;
    bool complete;
    string message;
    bool status;
  }
  struct VCRequest{
    string description;
    address sender;
    string message;
    bool status;
  }
  struct VerifyRequest{
    string description;
    address sender;
    string message;
    address verifier;
    bool status;
  }
  struct RequestBill{
    string bill;
    uint8 index;
    string message;
    bool status;
  }
  struct CheckRequest{
      uint8 index;
      string check;
      string message;
      bool status;
  }
  function Procurement(address argVC, address AR,address AO) public {
    Pmanager = msg.sender;
    VC = argVC;
    verifiers[AR]=true;
    verifiers[AO]=true;
  }
  mapping(address => bool) public verifiers;
  Request[] public requests;
  VCRequest[] public vcRequests;
  VerifyRequest[] public VerifyRequests;
  RequestBill[] public requestBills;
  CheckRequest[] public checkRequests;
  function makeNewRequest(string description) public{
    requests.push(Request(description, msg.sender, false , 'no message',false));
  }
  function acceptRequestPmanager(uint8 index,string message) public restricted1{
        Request storage currentRequest = requests[index];
         require(!currentRequest.status);
        currentRequest.message = message;
        currentRequest.status = true;
        sendToVC(currentRequest);
  }
  function rejectRequestPmanager(uint8 index,string message) public restricted1{
        Request storage currentRequest = requests[index];
        require(!currentRequest.status);
        currentRequest.message = message;
  }
  function sendToVC(Request currentRequest) private{
      vcRequests.push(VCRequest(currentRequest.description,currentRequest.sender,'no message',false));
  }
  function acceptRequestVC(uint8 index,string message,address verifier) public restricted2{
        require(verifiers[verifier]);
        VCRequest storage currentRequest = vcRequests[index];
        require(!currentRequest.status);
        currentRequest.status = true;
        currentRequest.message = message;
        sendToVerify(currentRequest,verifier);
  }
  function rejectRequestVC(uint8 index,string message) public restricted2{
        VCRequest storage currentRequest = vcRequests[index];
          require(!currentRequest.status);
        currentRequest.message = message;
  }
  function sendToVerify(VCRequest currentRequest,address verifier) private{
      VerifyRequests.push(VerifyRequest(currentRequest.description,currentRequest.sender,'no message',verifier,false));
  }
  function confirmVerification(uint8 index,string message) public restricted3(index){
    VerifyRequest storage currentRequest = VerifyRequests[index];  
    require(!currentRequest.status);
    currentRequest.message=message;
    currentRequest.status = true;
  }
  function rejectVerification(uint8 index,string message) public restricted3(index){
    VerifyRequest storage currentRequest = VerifyRequests[index];
    require(!currentRequest.status);
    currentRequest.message=message;
  }
  function sendBillsToVC(string bill,uint8 index) public restricted1{
      requestBills.push(RequestBill(bill,index,'no message',false));
  }
  function acceptBillVC(uint8 index,string message) public restricted2{
        RequestBill storage currentRequest = requestBills[index];
        require(!currentRequest.status);
        currentRequest.message = message;
        currentRequest.status = true;
  }
  function rejectBillVC(uint8 index,string message) public restricted2{
        RequestBill storage currentRequest = requestBills[index];
        require(!currentRequest.status);
        currentRequest.message = message;
  }
  function sendCheckPmanager(uint8 index,string check) public{
        checkRequests.push(CheckRequest(index,check,'no message',false));  
  }
  function acceptCheckVC(uint8 index,string message) public restricted2{
        CheckRequest storage currentRequest = checkRequests[index];
        require(!currentRequest.status);
        currentRequest.message = message;
        currentRequest.status = true;
  }
  function rejectCheckVC(uint8 index,string message) public restricted2{
        RequestBill storage currentRequest = requestBills[index];
        require(!currentRequest.status);
        currentRequest.message = message;
  }
  modifier restricted2(){
    require(msg.sender==VC);
    _;
  }
  modifier restricted1(){
    require(msg.sender==Pmanager);
    _;
  }
  modifier restricted3(uint8 index) {
    require(VerifyRequests[index].verifier==msg.sender);
    _;
  }
}
