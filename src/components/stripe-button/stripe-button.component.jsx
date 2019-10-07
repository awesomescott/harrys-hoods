import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_SmMcunW9gjRfMJyVq2414gSg00ArMVpueO';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            amount={ priceForStripe }
            billingAddress
            description={ `Your total is $${ price }` }
            image='https://svgshare.com/i/CUz.svg'
            label='Pay Now'
            name={ `Harry's Hoods Ltd.` }
            panelLabel='Pay Now'
            shippingAddress
            stripeKey={ publishableKey }
            token={ onToken }
        />
    );
};

export default StripeCheckoutButton;
