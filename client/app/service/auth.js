bingoApp.factory('Auth', function ($http, $location, $window) {

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      console.log(resp);
      return resp.data.token;
    });
  };


  return {
    signup: signup
  };
});