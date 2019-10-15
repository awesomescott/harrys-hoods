import React, { lazy, Suspense, useEffect  } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

// Redux
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// Uncomment the line below to add more collections redcords to firestore.
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

// Styles
import { GlobalStyle } from './global.styles';

// Lazy Loaded Components
const CheckoutPage = lazy(() => import ('./pages/checkout/checkout.component.jsx'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();

    /**
       * Add each of our collections to firestore, destructuring off the items and title fields.
       * 
       * NOTE: collections will need to be destructured off props,
       * and addCollectionAndDocuments will need to be imported 
       * in order to do this.
       */
      // addCollectionAndDocuments(
      //   'collections',
      //   collections.map(({ items, title }) => ({ items, title }))
      // );
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={ <Spinner /> }>
          { /* Home */ }
          <Route exact path='/' component={ HomePage } />

          { /* Shop */ }
          <Route path='/shop' component={ ShopPage } />

          { /* Checkout */ }
          <Route exact path='/checkout' component={ CheckoutPage } />

          { /* Sign in / Sign out */ }
          <Route
            exact
            path='/signin'
            render={() => currentUser
              ? <Redirect to='/' />
              : <SignInAndSignUp />}
          />
        </Suspense>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

  // Uncomment the line below to add more collections redcords to firestore.
  // collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
