import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends React.Component{
  render(){
    return (
      <div>
        <StripeCheckout
          name="Emaily" // the pop-in header title
          description="For five credits email" // the pop-in header subtitle
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}  
        >
         <button className="btn">
            Add Credits
        </button>
        </StripeCheckout>
      </div>
    );
  }
}


export default connect(null, actions)(Payments);
