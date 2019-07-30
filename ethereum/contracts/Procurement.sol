pragma solidity ^0.4.17;
contract Procurement{
  address public manager;
  struct Request{
   address sender;
   string description;
   string status;
   uint bill;
   bool vc;
   bool ar;
   bool ao; 
   bool arAccept;
   bool aoAccept;
   bool vcAccept;
   bool check;
   bool complete;
  }
  Request[] public requests;
  constructor()public{
      manager=msg.sender;
  }
  function requests_length()public view returns(uint){
      return requests.length;
  }
  function makeRequest(string desc)public{
   requests.push(Request(msg.sender,desc,"Request at PS",0,false,false,false,false,false,false,false,false));  
  }
  function acceptPS(uint ind)public{
     Request storage currentRequest = requests[ind];
     require(!currentRequest.complete);
     require(!currentRequest.vc);
      requests[ind].vc=true;
      requests[ind].status="Send To VC";
  }
  function rejectPS(uint ind)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      requests[ind].complete=true;
      requests[ind].status="Rejected by PS";
  }
  function showAR(uint ind)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      require(currentRequest.vc);
      currentRequest.ar=true;
      currentRequest.status="Send to Verifiers";
  }
  function showAO(uint ind)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      require(currentRequest.vc);
      currentRequest.ao=true;
      currentRequest.status="Send to Verifiers";
  }
  function acceptAR(uint ind)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      require(currentRequest.vc);
      require(currentRequest.ar);
      require(!currentRequest.arAccept);
      currentRequest.arAccept=true;
      
  }
  function acceptAO(uint ind)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      require(currentRequest.vc);
      require(currentRequest.ao);
      require(!currentRequest.aoAccept);
      currentRequest.aoAccept=true;
      currentRequest.status="Send to Verifiers";
  }
  function sendCheck(uint ind,uint amt)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      require(currentRequest.vcAccept);
      currentRequest.status="Check Sent to VC";
      currentRequest.bill=amt;
      currentRequest.check=true;
  }
  function acceptCheck(uint ind)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      require(currentRequest.vc);
      require(currentRequest.arAccept);
      require(currentRequest.aoAccept);
      require(currentRequest.vcAccept);
      currentRequest.complete=true;
      
      currentRequest.status="Collect Check From PS";
  }
  function rejectCheck(uint ind)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      require(currentRequest.check);
      currentRequest.complete=true;
      currentRequest.status="Check Rejected by VC";
  }
  function acceptVC(uint ind)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      require(currentRequest.vc);
      require(currentRequest.arAccept);
      require(currentRequest.aoAccept);
      currentRequest.vcAccept=true;
      currentRequest.status="Accepted by VC";
  }
  
  function rejectVC(uint ind)public{
      Request storage currentRequest = requests[ind];
      require(!currentRequest.complete);
      require(currentRequest.vc);
      require(currentRequest.arAccept);
      require(currentRequest.aoAccept);
      currentRequest.complete=true;
      currentRequest.status="Rejected by VC";
  }
}