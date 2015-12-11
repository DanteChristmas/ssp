(function() {
  'use strict';

  angular
    .module('ssp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/articles',{
        templateUrl: 'app/components/articles/articles.html',
        controller: 'ArticlesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
