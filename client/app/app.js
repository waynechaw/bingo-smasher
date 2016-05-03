var bingoApp = angular.module('bingoApp', ['ui.router', 'ngAnimate']);

bingoApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
      url: '/',
      templateUrl: 'app/templates/home.html',
      controller: 'homeCTRL'

  })
        
});