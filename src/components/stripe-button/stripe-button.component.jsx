import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ clearCart, price }) => {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    
    const onToken = token => {
        axios({
            data: {
                amount: priceForStripe,
                token: token
            },
            method: 'post',
            url: '/payment',
        })
        .then(() => {
            alert('Thank you for shopping at Harry\'s Hoods! Your test payment was successful.');
            clearCart();
        })
        .catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
        });
    };

    return (
        <StripeCheckout
            amount={ priceForStripe }
            billingAddress
            description={ `Your total is $${ price }` }
            image='/logo.svg'
            label='Pay Now'
            name={ `Harry's Hoods Ltd.` }
            panelLabel='Pay Now'
            shippingAddress
            stripeKey={ publishableKey }
            token={ onToken }
        />
    );
};

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
