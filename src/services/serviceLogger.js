const info = (message) => {
    console.log(`Meu log: ${message}`);
  };
  
  const error = (message) => {
    console.error(message);
  };
  
  module.exports = {
    info,
    error,
  };

