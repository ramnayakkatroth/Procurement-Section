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
      var acc=accounts[0];
      if (acc=='0x53E7291Ba66D9f79bc75bcce3F3889Cb0fc0d54A') {
      	  //console.log("HOD");
      	  //Hods page
      	  var d=document.getElementById('hod');
      	  var d1=document.getElementById('hod1');
      	  var p=document.getElementById('pro');
      	  var v=document.getElementById('vc');

      	  p.style.display="none";
      	  d.style.display="block";
      	  d1.style.display="block";
      	  v.style.display="none";
      	  
      	  
      	  
      }else if(acc=='0xB49B4C8edc861A706d6D0747147FFaA8fCE6377E'){
      		var d=document.getElementById('hod');
      		var d1=document.getElementById('hod1');
      		var p=document.getElementById('pro');
      		var v=document.getElementById('vc');


      	  	p.style.display="block";
      	  	d.style.display="none";
      	  	d1.style.display="none";
      	  	v.style.display="none";

      }else if(acc=='0x5C79F282b93cBb95283245b68912561F9891b83B'){
      		var d=document.getElementById('hod');
      		var d1=document.getElementById('hod1');
      		var p=document.getElementById('pro');
      		var v=document.getElementById('vc');

      	  	p.style.display="none";
      	  	d.style.display="none";
      	  	d1.style.display="none";
      	  	v.style.display="block";
      }
      //Hod table display
      var len=await factory.methods.requests_length().call();
      var t=document.getElementById('hodtable');

      //console.log(t);
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
        cell3.innerHTML = req.message;
        cell4.innerHTML = ""+req.status;
        if(req.message=="Rejected at PS" || req.complete==true){
        	cell5.innerHTML = "Yes";	
        }else{
        	cell5.innerHTML = "No";
        }
        
        i+=1;

      }
      //end of hod table

      //procure table
      //var len=await factory.methods.requests_length().call();
      var t=document.getElementById('protable');
      var t1=document.getElementById('protable1');
      //console.log(t);
      var i=0;
      while(i<len){
        
        const req=await factory.methods.requests(i).call();
        if(req.message!="Rejected at PS" && req.status==false){
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

	        	await factory.methods.rejectRequestPmanager(id-1,"Rejected at PS").send({from:accounts[0]});
	        };

	        var yes=document.createElement("button");
	        yes.setAttribute("class","ui positive button");
	        yes.innerHTML="Accept";
	        yes.setAttribute("id",i+1);
	        yes.onclick=async function(i){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	await factory.methods.acceptRequestPmanager(id-1,"Send To VC").send({from:accounts[0]});
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
	        cell5.innerHTML=req.message;
	           
        }
        i+=1;
      }
      //end of procure table


      //vc table
      var len=await factory.methods.vcRequests_length().call();
      var i=0;
      var v=document.getElementById('vctable');
      var v1=document.getElementById('vctable1');
      while(i<len){
      	const req=await factory.methods.vcRequests(i).call();	

      	//console.log(req.message);

      	if(req.message=="Request At VC"){
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
	        AR.innerHTML="AR";
	        AR.setAttribute("id",i+1);
	        AR.onclick=async function(){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	//console.log(accounts);
	        	console.log(id);
	        	console.log(typeof(accounts[0]));

	        	await factory.methods.acceptRequestVC(id-1,"Send to AR","0xB49B4C8edc861A706d6D0747147FFaA8fCE6377E").send({from:accounts[0]});
	        };

	        var AO=document.createElement("button");
	        AO.setAttribute("class","ui blue button");
	        AO.innerHTML="AO";
	        AO.setAttribute("id",i+1);
	        AO.onclick=async function(){
	        	const accounts=await web3.eth.getAccounts();
	        	var id=parseInt(this.id);
	        	console.log(id);
	        	await factory.methods.acceptRequestVC(id-1,"Send To AO","0xB49B4C8edc861A706d6D0747147FFaA8fCE6377E").send({from:accounts[0]});
	        };
	        cell4.appendChild(AR);
	        cell5.appendChild(AO);

	        
        }else{
        	var row = v1.insertRow(1);
	        var cell1 = row.insertCell(0);
	        var cell2 = row.insertCell(1);
	        var cell3 = row.insertCell(2);
	        var cell4 = row.insertCell(3);
	        var cell5 = row.insertCell(4);
	     	cell1.innerHTML = i+1;
	        cell2.innerHTML = req.description;
	        cell3.innerHTML = req.sender;
	        cell4.innerHTML = ""+req.status;
	        cell5.innerHTML=req.message;
	           
        }

      	i+=1;

      }


      
      //console.log(balance);
      //console.log(campain.methods);
     // console.log(accounts[0]);
    // console.log(factory.methods);
  }
  onSubmit=async (event)=>{
    event.preventDefault();
     // console
      const out=await factory.methods.makeNewRequest(this.state.msg).send({from:this.state.account});
      //console.log(out);
      //console.log(await factory.methods.requests(0).call());
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
      	<br/><br/><br/>
        <div>
          <div className='ui raised segment container' id='hod1' style={{display:'none'}}>
              <div className='ui center aligned blue header'>Recent Requests</div>
                <table className='ui table' id='hodtable'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Message</th>
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

                <div className='ui center aligned blue header'>Completed Requests</div>
                <table className='ui table' id='protable1'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    <th>Status</th>
                    <th>Message</th>
                    
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

                <div className='ui center aligned blue header'>Completed Requests</div>
                <table className='ui table' id='vctable1'>
                  <tbody>
                    <tr>
                    <th>R.No</th>
                    <th>Request Message</th>
                    <th>Sender</th>
                    <th>Status</th>
                    <th>Message</th>
                    
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
