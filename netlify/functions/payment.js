const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    
    const body = {
      source: data.token.id,
      amount: data.amount,
      currency: 'usd'
    };

    const charge = await stripe.charges.create(body);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ success: charge })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
