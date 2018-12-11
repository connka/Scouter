/**
 * General async error catcher
 * @param {promise} promise
 * @return {data} If err catch err, else return [null(err),data]
 */
module.exports.to = function(promise) {
  return promise.then((data) => {
    return [null, data];
  })
      .catch((err) => [err]);
};
