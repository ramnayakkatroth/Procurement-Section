static async getInitialProps(){
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return {campaigns};
  }
renderCampaigns(){
  const items = this.props.campaigns.map(address =>{
    return {
      header:address,
      description:<a>View campaign</a>,
      fluid:true
    }
  });
  return <Card.Group items = {items }/>
}