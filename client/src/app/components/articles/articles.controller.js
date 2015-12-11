angular.module('ssp')
  .controller('ArticlesController', function ($scope, Articles) {

    Articles.query(function (res) {
      $scope.articles = res;
    });

  });
