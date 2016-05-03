bingoApp.controller('userHomeCTRL', function($scope, $window, Auth, $location, $localStorage, $http) {

  $scope.username = $localStorage.currentUser;

  $scope.signout = function () {
    delete $localStorage.currentUser;
    delete $localStorage.token;
    $http.defaults.headers.common.Authorization = '';
    $location.path('/');
  }

});