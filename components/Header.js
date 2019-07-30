import React from 'react';
import {Menu} from 'semantic-ui-react';
import{Link} from '../routes' ;
export default () =>{
  return (
      <Menu style={{marginTop:'50px'}}>
        <Link route="/">
          <a className="item">
            Crowd Coin
          </a>
        </Link>
        <Menu.Menu position='right'>
            <Menu.Item content = 'Campaigns'/>
            <Menu.Item content = '+'/>
        </Menu.Menu>

      </Menu>
  );
};
