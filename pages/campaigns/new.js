import React,{Component} from 'react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';
class CreateCampaign extends Component{
  state={
    minimumContribution:'',
    errorMessage:'hai',
    loading:false
  }
  onSubmit=async (event)=>{
    event.preventDefault();
    try{
        console.log(web3.providers.HttpProvider);
        this.setState({loading:true});
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
      //  await factory.methods.createCampaign(this.state.minimumContribution).send({
        //  from:accounts[0]
        //});
        Router.pushRoute('/');

    }
    catch(e){
      this.setState({errorMessage:e.message});
    }
    this.setState({loading:false});
  }
  render(){
    return (
      <Layout>
        <h1>Create a New Campaign</h1>
        <Form onSubmit={this.onSubmit} >
          <Form.Field>
            <label>Minimum Contribution is 100</label>
            <Input value={this.state.minimumContribution}
              onChange={event=>this.setState({minimumContribution:event.target.value})}
              label='Wei'
              labelPosition='right'
              placeholder='Enter. . .'
            />
          </Form.Field>
        <Button loading={this.state.loading} type='submit' content='Create' primary />
        <Message error header="Oops!" content={this.state.errorMessage}/>
        </Form>
      </Layout>
    );
  }
};
export default CreateCampaign;
