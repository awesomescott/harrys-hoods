import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

// Redux selectors
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

// Styles
import {
    CheckoutHeaderContainer,
    CheckoutPageContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer,
} from './checkout.styles';

export const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        { /* Cart items list header */ }
        <CheckoutHeaderContainer>
            { /* Product title */ }
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>

            { /* Description */ }
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>

            { /* Quantity */ }
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>

            { /* Price */ }
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>

            { /* Remove item */ }
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>

        { /* Cart items */ }
        {
            cartItems.map(cartItem => <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />)
        }

        { /* Total */ }
        <TotalContainer>TOTAL: ${ total }</TotalContainer>

        { /* Payment test warning */ }
        <WarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 12/34 - CVV: 123
        </WarningContainer>

        { /* Stripe checkout button */ }
        <StripeCheckoutButton price={ total } />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
