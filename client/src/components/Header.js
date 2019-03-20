import React  from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends React.Component{
  
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
      case false:
        return (<li><a href="/auth/google">Login With Google</a></li>);
      default:  
        return [
          <li key="payment"><Payments/></li>,
          <li key="credits" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <li key="log-out-link"><a href="/api/logout">Log out</a></li>
        ]
    }
  }

  render(){
    return(
      <nav>
      <div className="nav-wrapper">
        <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
        <ul className="right">
          {/* <li><a>Login With Google</a></li> */}
          {this.renderContent()}
        </ul>
      </div>
    </nav>
    )
  }

}

const mapStateToProps = ({auth})=>{
  return {
    auth
  }
}
export default connect(mapStateToProps)(Header)
