var bingoApp = angular.module('bingoApp', ['ui.router', 'ngAnimate', 'ngStorage']);

bingoApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('frontpage', {
      url: '/',
      templateUrl: 'app/templates/home.html',
      controller: 'homeCTRL'

  })
  .state('userhome', {
      url: '/home',
      templateUrl: 'app/templates/user-home.html',
      controller: 'userHomeCTRL'

  })
        
})
.run(function ($rootScope, $http, $location, $localStorage) {

  if ($localStorage.currentUser) {
      $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
  }


  $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var publicPages = ['/'];
      var restrictedPage = publicPages.indexOf($location.path()) === -1;

      if (restrictedPage && !$localStorage.currentUser) {
          $location.path('/');
      }
  });

});