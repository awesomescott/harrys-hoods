exports.handler = async (event, context) => {
  // This function is just a placeholder - Netlify will actually serve 
  // the service worker from the build directory automatically
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/javascript'
    },
    body: 'console.log("Service worker loaded from Netlify Functions");'
  };
};
