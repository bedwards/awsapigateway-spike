'use strict';

module.exports.root = async event => {
  console.log('foo');
  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
      {
        id: 'd9f9',
      }
    ),
  };
};
