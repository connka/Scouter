const config = {
  API_PATH: {
    development: 'http://localhost:5000',
    production: '',
  }[process.env.NODE_ENV],
};
