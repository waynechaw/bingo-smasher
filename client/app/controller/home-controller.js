bingoApp.controller('homeCTRL', function($scope, $window, Auth, $location, $localStorage) {

  $scope.modalShown = false;
  $scope.signInModalShown = false;
  $scope.usernameTaken = false;
  $scope.toggleModal = function() {

    $scope.modalShown = !$scope.modalShown;
  };

  $scope.toggleSignIn = function() {

    $scope.signInModalShown = !$scope.signInModalShown;
  };

  $scope.username = function(){
      $scope.usernameTaken = false;
  };




  $scope.user = {};
  $scope.signInUser = {};

  $scope.signup = function () {
    $scope.usernameTaken = false;
    Auth.signup($scope.user)
      .then(function (token) {
        $localStorage.currentUser = $scope.user.username;
        $localStorage.token = token;
        $location.path('/home');
      })
      .catch(function (error) {
        $scope.usernameTaken = true;
      });
  };

  $scope.signin = function () {
    Auth.signin($scope.signInUser)
      .then(function (token) {
        $localStorage.currentUser = $scope.signInUser.username;
        $localStorage.token = token;
        $location.path('/home');
      })
      .catch(function (error) {
        $scope.failed = true;
      });
  };


});

bingoApp.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});