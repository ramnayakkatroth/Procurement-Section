import React,{ Component } from 'react';
import factory from '../ethereum/factory';
import {Card,Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';
class CampaignIndex extends Component{
	state={
    msg:'',
    account:'',
    }
  async componentDidMount(){
  		const accounts=await web3.eth.getAccounts();
  		this.setState({account:accounts[0]});
  		const acc=accounts[0];
  		//HOD
  		if (acc=='0x53E7291Ba66D9f79bc75bcce3F3889Cb0fc0d54A') {
      	  var d=document.getElementById('hod');
      	  var d1=document.getElementById('hod1');
      	  var p=document.getElementById('pro');
      	  var v=document.getElementById('vc');
      	  var ar=document.getElementById('ar');
      	  var ao=document.getElementById('ao');

      	  p.style.display="none";
      	  d.style.display="block";
      	  d1.style.display="block";
      	  v.style.display="none";

      	  	ar.style.display="none";
      	  	ao.style.display="none";
      	  
      	  
      	  //Pro
      }else if(acc=='0xB49B4C8edc861A706d6D0747147FFaA8fCE6377E'){
      		var d=document.getElementById('hod');
      		var d1=document.getElementById('hod1');
      		var p=document.getElementById('pro');
      		var v=document.getElementById('vc');
      		var ar=document.getElementById('ar');
      		var ao=document.getElementById('ao');


      	  	p.style.display="block";
      	  	d.style.display="none";
      	  	d1.style.display="none";
      	  	v.style.display="none";

      	  	ar.style.display="none";
      	  	ao.style.display="none";
      	  	//vc
      }else if(acc=='0x5C79F282b93cBb95283245b68912561F9891b83B'){
      		var d=document.getElementById('hod');
      		var d1=document.getElementById('hod1');
      		var p=document.getElementById('pro');
      		var v=document.getElementById('vc');
      		var ar=document.getElementById('ar');
      		var ao=document.getElementById('ao');

      	  	p.style.display="none";
      	  	d.style.display="none";
      	  	d1.style.display="none";
      	  	v.style.display="block";

      	  	ar.style.display="none";
      	  	ao.style.display="none";
      }else if(acc=='0xA24D9a4c74e2FFE2D3fFD54D4A3e1003293918bc'){
      		var d=document.getElementById('hod');
      		var d1=document.getElementById('hod1');
      		var p=document.getElementById('pro');
      		var v=document.getElementById('vc');
      		var ar=document.getElementById('ar');
      		var ao=document.getElementById('ao');

      	  	p.style.display="none";
      	  	d.style.display="none";
      	  	d1.style.display="none";
      	  	v.style.display="none";
      	  	ar.style.display="block";
      	  	ao.style.display="none";

      }else if(acc=='0xCcacb9945f22E5B0b0C32a586BFAc2538B2f026B'){
      		var d=document.getElementById('hod');
      		var d1=document.getElementById('hod1');
      		var p=document.getElementById('pro');
      		var v=document.getElementById('vc');
      		var ar=document.getElementById('ar');
      		var ao=document.getElementById('ao');

      	  	p.style.display="none";
      	  	d.style.display="none";
      	  	d1.style.display="none";
      	  	v.style.display="none";
      	  	ar.style.display="none";
      	  	ao.style.display="block";

      }




  		//Hod table display
      var len=await factory.methods.requests_length().call();
      var t=document.getElementById('hodtable');
      var i=0;
      while(i<len){
        
        const req=await factory.methods.requests(i).call();
       // const req1=await factory.methods.vcRequests(i).call();
        var row = t.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = i+1;
        cell2.innerHTML = req.description;
        cell3.innerHTML = req.status;
        //cell4.innerHTML = ""+req.complete;
        if(req.status=="Rejected at PS" || req.complete==true){
        	cell4.innerHTML = "<button class='ui green button'><i class='check icon'></i>Yes</button>";	
        }else{
        	cell4.innerHTML = "<button class='ui red button'><i class='close icon'></i>No</button>";
        }
        
        i+=1;

      }
      //end of hod table

      //protable
	  var t=document.getElementById('protable');
      var t1=document.getElementById('protable1');
      var t2=document.getElementById('protable2');
      //console.log(t);
      var i=0;
      while(i<len){
        
        const req=await factory.methods.requests(i).call();
        if(req.vcAccept==true && req.check!=true){
        	var row = t2.insertRow(1);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
	        var cell5 = row.insertCell(4);
	        cell1.innerHTML=i+1;
	        cell2.innerHTML=req.description;
	        cell3.innerHTML=req.sender;
	        var ip=document.createElement("input");
	        ip.setAttribute("class","ui input");
	        ip.setAttribute("type","number");
	       // ip.setAttribute("value","0");
	        ip.setAttribute("id","ip");
	        ip.setAttribute("placeholder","Enter Expected Amount");
	        cell4.appendChild(ip);
	        var sendCheck=document.createElement("button");
	        sendCheck.setAttribute("class","ui blue button");
	        sendCheck.setAttribute("id",i+1);
	        sendCheck.innerHTML="Send Bill Amt";
	        cell5.appendChild(sendCheck);
	        sendCheck.onclick=async function(){
	        	var val=document.getElementById("ip").value;
	        	var val1=parseInt(val);
	        	//console.log(val1);
	        	var id=parseInt(this.id);
	        	const accounts=await web3.eth.getAccounts();
	        	const out=await factory.methods.sendCheck(id-1,val1).send({from:accounts[0]});
	        }

        }
        if(req.vc!=true && req.status!="Rejected by PS" && req.complete!=true){
	        var row = t.insertRow(1);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
	        var cell5 = row.insertCell(4);
	        var cell6 = row.insertCell(5);
	        cell1.innerHTML = i+1;
	        cell2.innerHTML = req.description;
	        cell3.innerHTML = req.sender;
	        cell4.innerHTML = ""+req.status;
	        var no=document.createElement("button");
	        no.setAttribute("class","ui negative button");
	        no.innerHTML="Reject";
	        no.setAttribute("id",i+1);
	        no.onclick=async function(){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	//console.log(typeof(id));

	        	await factory.methods.rejectPS(id-1).send({from:accounts[0]});
	        };

	        var yes=document.createElement("button");
	        yes.setAttribute("class","ui positive button");
	        yes.innerHTML="Accept";
	        yes.setAttribute("id",i+1);
	        yes.onclick=async function(i){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	await factory.methods.acceptPS(id-1).send({from:accounts[0]});
	        };
	        cell5.appendChild(no);
	        cell6.appendChild(yes);
        }else{
        	
        	var row = t1.insertRow(1);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
	        var cell5 = row.insertCell(4);
	     	cell1.innerHTML = i+1;
	        cell2.innerHTML = req.description;
	        cell3.innerHTML = req.sender;
	        cell4.innerHTML = ""+req.status;
	           
        }
        i+=1;
      }
      //end of procure table



      //vc table
      //var len=await factory.methods.vcRequests_length().call();
      var i=0;
      var v=document.getElementById('vctable');
      var v1=document.getElementById('vctable1');
      var v2=document.getElementById('vctable2');
      while(i<len){
      	const req=await factory.methods.requests(i).call();	

      	//console.log(req.message);
      	if(req.check==true && req.complete!=true){
      		var row = v2.insertRow(1);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
	        var cell5 = row.insertCell(4);
	        cell1.innerHTML=i+1;
	        cell2.innerHTML=req.description;
	        cell3.innerHTML=req.sender;
	        cell4.innerHTML=req.bill;

	        var ac=document.createElement("button");
	        ac.setAttribute("class","ui green button");
	        ac.setAttribute("id",i+1);
	        ac.innerHTML="Accept";
	        cell5.appendChild(ac);

	        var rc=document.createElement("button");
	        rc.setAttribute("class","ui red button");
	        rc.setAttribute("id",i+1);
	        rc.innerHTML="Reject";
	        cell5.appendChild(rc);

	        ac.onclick=async function(){
	        	var id=parseInt(this.id);
	        	const accounts=await web3.eth.getAccounts();
	        	const out=await factory.methods.acceptCheck(id-1).send({from:accounts[0]});
	        }
	        rc.onclick=async function(){
	        	var id=parseInt(this.id);
	        	const accounts=await web3.eth.getAccounts();
	        	const out=await factory.methods.rejectCheck(id-1).send({from:accounts[0]});	
	        }

      	}
      	if(req.vc==true && req.ao!=true && req.ar!=true){
        	var row = v.insertRow(1);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
	        var cell5 = row.insertCell(4);
	        cell1.innerHTML = i+1;
	        cell2.innerHTML = req.description;
	        cell3.innerHTML = req.sender;
	        var AR=document.createElement("button");
	        AR.setAttribute("class","ui blue button");
	        AR.innerHTML="Send to Verifiers";
	        AR.setAttribute("id",i+1);
	        AR.onclick=async function(){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	//console.log(accounts);
	        	console.log(id);
	        	console.log(typeof(accounts[0]));

	        	await factory.methods.showAR(id-1).send({from:accounts[0]});
	        	await factory.methods.showAO(id-1).send({from:accounts[0]});
	        };

	        var AO=document.createElement("button");
	        AO.setAttribute("class","ui blue button");
	        AO.innerHTML="AO";
	        AO.setAttribute("id",i+1);
	        AO.onclick=async function(){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	
	        };
	        cell4.appendChild(AR);
	        //cell5.appendChild(AO);

	        
        }else if(req.vcAccept!=true && req.complete!=true && req.status!="Request at PS"){
        	//console.log("im")
        	//console.log(req.aoAccept);
        	//console.log(req.arAccept);
        	//console.log(req.vcAccept);
        	//console.log(req.status);
        	var row = v1.insertRow(1);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
	        var cell5 = row.insertCell(4);
	        var cell6 = row.insertCell(5);
	        var cell7 = row.insertCell(6);
	     	cell1.innerHTML = i+1;
	        cell2.innerHTML = req.description;
	        cell3.innerHTML = req.sender;
	        //cell4.innerHTML = ""+req.status;
	        var AO=document.createElement("button");
	        AO.setAttribute("class","ui blue button");
	        AO.innerHTML="AO";
	        AO.setAttribute("id",i+1);
	        AO.onclick=async function(){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	await factory.methods.showAO(id-1).send({from:accounts[0]});
	        };
	        var AR=document.createElement("button");
	        AR.setAttribute("class","ui blue button");
	        AR.innerHTML="AR";
	        AR.setAttribute("id",i+1);
	        AR.onclick=async function(){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	//console.log(accounts);
	        	console.log(id);
	        	console.log(typeof(accounts[0]));

	        	await factory.methods.showAR(id-1).send({from:accounts[0]});
	        };
	        var AOorange=document.createElement("button");
	        AOorange.setAttribute("class","ui inverted orange button");
	        AOorange.innerHTML="Sent To AO";

	        var ARorange=document.createElement("button");
	        ARorange.setAttribute("class","ui inverted orange button");
	        ARorange.innerHTML="Sent To AR";

	        var AOaccept=document.createElement("button");
	        AOaccept.setAttribute("class","ui inverted green button");
	        AOaccept.innerHTML="AO Accepted";

	        var ARaccept=document.createElement("button");
	        ARaccept.setAttribute("class","ui inverted green button");
	        ARaccept.innerHTML="AR Accepted";

	        
	       if(req.arAccept==true){
	       		cell4.appendChild(ARaccept);
	       }else{
	       		cell4.appendChild(ARorange);
	       }
	       if(req.aoAccept==true){
	       		cell5.appendChild(AOaccept);
	       }else{
	       		cell5.appendChild(AOorange);
	       }
	      
	       var vcAccept=document.createElement("button");
	       vcAccept.setAttribute("class","ui green button");
	       vcAccept.innerHTML="Accept";
	       vcAccept.setAttribute("id",i+1);
	       vcAccept.onclick=async function(){
	       		const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	await factory.methods.acceptVC(id-1).send({from:accounts[0]});
	       }

	       var vcReject=document.createElement("button");
	       vcReject.setAttribute("class","ui red button");
	       vcReject.innerHTML="Reject";
	       vcReject.setAttribute("id",i+1);
	       vcReject.onclick=async function(){
	       		const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	await factory.methods.rejectVC(id-1).send({from:accounts[0]});
	       }

	           cell6.appendChild(vcAccept);
	           cell7.appendChild(vcReject);
        }

      	i+=1;

      }

      //end of vc table



      //aotable
	  var t=document.getElementById('aotable');
      //var t1=document.getElementById('protable1');
      //console.log(t);
      var i=0;
      while(i<len){
        
        const req=await factory.methods.requests(i).call();
        if(req.ao==true && req.aoAccept!=true){
	      	var row = t.insertRow(1);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
	        var yes=document.createElement("button");
	        yes.setAttribute("class","ui positive button");
	        yes.innerHTML="Accept";
	        yes.setAttribute("id",i+1);
	        yes.onclick=async function(i){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	await factory.methods.acceptAO(id-1).send({from:accounts[0]});
	        };
	        cell1.innerHTML=i+1;
	        cell2.innerHTML=req.description;
	        cell3.innerHTML=req.sender;
	        cell4.appendChild(yes);
	        //cell5.appendChild(no);
        }
        i+=1;
      }
      //ao table

      //artable
	  var t=document.getElementById('artable');
      //var t1=document.getElementById('protable1');
      //console.log(t);
      var i=0;
      while(i<len){
        
        const req=await factory.methods.requests(i).call();
        //sconsole.log(req.arAccept);
        if(req.ar==true & req.arAccept!=true){

	      	var row = t.insertRow(1);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
	        var yes=document.createElement("button");
	        yes.setAttribute("class","ui positive button");
	        yes.innerHTML="Accept";
	        yes.setAttribute("id",i+1);
	        yes.onclick=async function(i){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	await factory.methods.acceptAR(id-1).send({from:accounts[0]});
	        };
	        cell1.innerHTML=i+1;
	        cell2.innerHTML=req.description;
	        cell3.innerHTML=req.sender;
	        cell4.appendChild(yes);
	        //cell5.appendChild(no);
        }
        i+=1;
      }
      //ar table
      
   }
  onSubmit=async (event)=>{
    event.preventDefault();
    	//console.log(this.state.msg);
      const out=await factory.methods.makeRequest(this.state.msg).send({from:this.state.account});

      
  }

	
  render(){
    return (
    <div id='root'>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"/>
         <div className='ui two column center aligned stackable grid raised segment container' id='hod' style={{display:'none'}}>
			   <div className='column'>
      			<div className='ui blue raised segment header'>New Request</div>
      			    <form className='ui form' onSubmit={this.onSubmit}>
      				<label>Short Description</label>
      				<input type='text' value={this.state.msg}  onChange={event=>this.setState({msg:event.target.value})} placeholder='Short Description About Request' required /><br/><br/>
      				<button className='ui blue button'>Create Request</button>
      			</form>
      		</div>
      	</div>
      	<div>
          <div className='ui raised segment container' id='hod1' style={{display:'none'}}>
              <div className='ui center aligned blue header'>Recent Requests</div>
                <table className='ui table' id='hodtable'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Status</th>
                    <th>Complete</th>
                  </tr>
                  </tbody>
                </table>
            </div>
        </div>



        <div id='pro' style={{display:'none'}} >
        	<div className='ui blue inverted raised center aligned segment header'>Procurement Section</div>
        	<div className='ui raised segment container'>
              <div className='ui center aligned blue header'>Recent Requests</div>
                <table className='ui table' id='protable'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    <th>Status</th>
                    <th align='right'>Forward To VC</th>
                    
                  </tr>
                  </tbody>
                </table>
                <br/>
                <br/>
                <br/>

                <div className='ui center aligned blue header'>Check Requests</div>
                <table className='ui table' id='protable2'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    <th>Amount</th>
                    <th>&nbsp;</th>
                  </tr>
                  </tbody>
                </table>
                <br/>
                <br/>

                <div className='ui center aligned blue header'>Completed Requests</div>
                <table className='ui table' id='protable1'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    <th>Status</th>
                  </tr>
                  </tbody>
                </table>
            </div>
        </div>


        <div id='vc' style={{display:'none'}} >
        	<div className='ui blue inverted raised center aligned segment header'>VC Section</div>
        	<div className='ui raised segment container'>
              <div className='ui center aligned blue header'>Recent Requests</div>
                <table className='ui table' id='vctable'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    <th align='right'>Forward To</th>
                    
                  </tr>
                  </tbody>
                </table>
                <br/>
                <br/>
                <br/>

                <div className='ui center aligned blue header'>Verification Requests</div>
                <table className='ui table' id='vctable1'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    
                    <th align='center'>AR Status</th>
                    <th align='center'>AO Status</th>
                    <th align='right'>Accept/Reject</th>
                    
                  </tr>
                  </tbody>
                </table>
                <br/>
                <br/>
                
                <div className='ui center aligned blue header'>Check Requests</div>
                <table className='ui table' id='vctable2'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    <th>Amount (Rs.)</th>
                    <th>Accept/Reject</th>
                    
                  </tr>
                  </tbody>
                </table>
            </div>
        </div>


         <div id='ar' style={{display:'none'}} >
        	<div className='ui blue inverted raised center aligned segment header'>AR Section</div>
        	<div className='ui raised segment container'>
              <div className='ui center aligned blue header'>Recent Requests</div>
                <table className='ui table' id='artable'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    <th align='right'>Accept/Reject</th>
                  </tr>
                  </tbody>
                </table>
                
            </div>
        </div>



        <div id='ao' style={{display:'none'}} >
        	<div className='ui blue inverted raised center aligned segment header'>AO Section</div>
        	<div className='ui raised segment container'>
              <div className='ui center aligned blue header'>Recent Requests</div>
                <table className='ui table' id='aotable'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    <th align='right'>Accept/Reject</th>
                  </tr>
                  </tbody>
                </table>
                
            </div>
        </div>


    </div>
    
  );
  }
}
export default CampaignIndex;
