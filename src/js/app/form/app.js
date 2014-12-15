angular.module('app', ['ngRoute', 'planillaServices'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'list.html'
    })
    .when('/edit/:Id', {
      controller:'EditCtrl',
      templateUrl:'detail.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'detail.html'
    })
    .when('/new/:parentId', {
      controller:'CreateCtrl',
      templateUrl:'detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})

.controller('ListCtrl', function($scope, Planilla) {
  $scope.planillass = Planilla.query();
  $scope.orderProp = 'id';
})

.controller('CreateCtrl', function($scope, $location, $timeout, $routeParams, Planilla) {
  $scope.parentId = $routeParams.parentId;

  $scope.save = function() {
    Node.save($scope.node, function() {
      $timeout(function() {
        $location.path('/');
      });
    });
  };
})

.controller('EditCtrl',
  function($scope, $location, $timeout, $routeParams, Planilla) {
    var planillaId = $routeParams.planillaId;
    $scope.planilla = Planilla.get({'planillaId': planillaId});

    $scope.destroy = function() {
      Planilla.remove({planillaId: $scope.planilla.id}, $scope.planilla, function() {
        $timeout(function() {
          $location.path('/');
        });
      });
    };

    $scope.save = function() {
      Planilla.update({planillaId: $scope.planilla.id}, $scope.planilla, function() {
        $timeout(function() {
          $location.path('/');
        });
      });
    };
});