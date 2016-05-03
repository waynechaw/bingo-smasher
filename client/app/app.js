var bingoApp = angular.module('bingoApp', ['ui.router', 'ngAnimate']);

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
        
});