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
    requests.push(Request(description, msg.sender, false , 'Request At PS',false));
  }
  function requests_length() public view returns(uint256){
      return requests.length;
  }
  function vcRequests_length() public view returns(uint256){
      return vcRequests.length;
  }
  function requestBills_length() public view returns(uint256){
      return requestBills.length;
  }
  function checkRequests_length() public view returns(uint256){
      return checkRequests.length;
  }
  function VerifyRequests_length() public view returns(uint256){
      return VerifyRequests.length;
  }
  function acceptRequestPmanager(uint8 index,string message) public{
        Request storage currentRequest = requests[index];
         require(!currentRequest.status);
        currentRequest.message = message;
        currentRequest.status = true;
        sendToVC(currentRequest);
  }
  function rejectRequestPmanager(uint8 index,string message) public{
        Request storage currentRequest = requests[index];
        require(!currentRequest.status);
        currentRequest.message = message;
  }
  function sendToVC(Request currentRequest) private{
      vcRequests.push(VCRequest(currentRequest.description,currentRequest.sender,'Request At VC',false));
  }
  function acceptRequestVC(uint8 index,string message,address verifier) public {
        require(verifiers[verifier]);
        VCRequest storage currentRequest = vcRequests[index];
        require(!currentRequest.status);
        currentRequest.status = true;
        currentRequest.message = message;
        sendToVerify(currentRequest,verifier);
  }
  function rejectRequestVC(uint8 index,string message) public {
        VCRequest storage currentRequest = vcRequests[index];
          require(!currentRequest.status);
        currentRequest.message = message;
  }
  function sendToVerify(VCRequest currentRequest,address verifier) private{
      VerifyRequests.push(VerifyRequest(currentRequest.description,currentRequest.sender,'Send to Verifier',verifier,false));
  }
  function confirmVerification(uint8 index,string message) public{
    VerifyRequest storage currentRequest = VerifyRequests[index];  
    require(!currentRequest.status);
    currentRequest.message=message;
    currentRequest.status = true;
  }
  function rejectVerification(uint8 index,string message) public{
    VerifyRequest storage currentRequest = VerifyRequests[index];
    require(!currentRequest.status);
    currentRequest.message=message;
  }
  function sendBillsToVC(string bill,uint8 index) public {
      requestBills.push(RequestBill(bill,index,'Send Bills to VC',false));
  }
  function acceptBillVC(uint8 index,string message) public {
        RequestBill storage currentRequest = requestBills[index];
        require(!currentRequest.status);
        currentRequest.message = message;
        currentRequest.status = true;
  }
  function rejectBillVC(uint8 index,string message) public {
        RequestBill storage currentRequest = requestBills[index];
        require(!currentRequest.status);
        currentRequest.message = message;
  }
  function sendCheckPmanager(uint8 index,string check) public{
        checkRequests.push(CheckRequest(index,check,'no message',false));  
  }
  function acceptCheckVC(uint8 index,string message) public {
        CheckRequest storage currentRequest = checkRequests[index];
        require(!currentRequest.status);
        currentRequest.message = message;
        currentRequest.status = true;
  }
  function rejectCheckVC(uint8 index,string message) public {
        RequestBill storage currentRequest = requestBills[index];
        require(!currentRequest.status);
        currentRequest.message = message;
  }
 
}
