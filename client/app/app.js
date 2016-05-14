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
      abstract:true,
      url: '/home',
      templateUrl: 'app/templates/user-home.html',
      controller: 'userHomeCTRL'
  })

  .state('userhome.dashboard', {
      url: '',
      templateUrl: 'app/templates/dashboard.html',
      controller: 'dashboardCTRL'
  })

  .state('userhome.profile', {
      url: '/profile',
      templateUrl: 'app/templates/profile.html',
      controller: 'profileCTRL'
  })

  .state('userhome.search', {
      url: '/search',
      templateUrl: 'app/templates/search.html',
      controller: 'searchCTRL'
  })

  .state('userhome.messages', {
      url: '/messages',
      templateUrl: 'app/templates/messages.html',
      controller: 'messagesCTRL'
  })

  .state('userhome.setting', {
      url: '/setting',
      templateUrl: 'app/templates/setting.html',
      controller: 'settingCTRL'
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