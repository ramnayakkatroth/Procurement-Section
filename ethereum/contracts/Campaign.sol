pragma solidity ^0.4.0;
contract CampaignFactory{
    address[] public deployedCampaigns;
    function createCampaign(uint minumum) public{
        address con=new Campaign(minumum,msg.sender);
        deployedCampaigns.push(con);
    }
    function getDeployedCampaigns() public view returns(address[]){
        return deployedCampaigns;
    }
}
contract Campaign{
    address public manager;
    uint public minumumContribution;
    mapping(address=>bool) public approvers;
    uint public approversCount=0;
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address=>bool) approvals;
    }
    Request[] public requests;
    function Campaign(uint minumum,address sender) public{
        manager=sender;
        minumumContribution=minumum;
    }
    function contribute() public payable{
        require(msg.value>minumumContribution);
        approvers[msg.sender]=true;
        approversCount++;
    }
    function createRequest(string description,uint value,address recipient) public restricted{
        Request memory newRequest=Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            approvalCount:0
        });
        requests.push(newRequest);
    }
    function approveRequest(uint index) public{
        Request storage request=requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvalCount++;
        request.approvals[msg.sender]=true;
    }
    function finalizeRequest(uint index) public restricted{
        Request storage request=requests[index];
        require(request.approvalCount>approversCount/2);
        require(!request.complete);
        request.recipient.transfer(request.value);
        request.complete=true;

    }
    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
}
