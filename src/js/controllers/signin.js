'use strict';
app.factory('Auth', ['$resource',
  function($resource){
    return $resource('http://localhost/face_laravel/public/service/authenticate/:planillaId', {}, {
      'get': {method:'GET', params:{planillaId:'@planillaId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);
/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', 'Auth', function($scope, $http, $state, Auth) {
    $scope.user = {};
    $scope.authError = null;

    $scope.login = function() {
      Auth.save($scope.user, function() {
        $timeout(function() {
          $location.path('/');
        });
      });
    };

    //$scope.login = function() {
      //$scope.authError = null;

      // Try to login
      // $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      // .then(function(response) {
      //   if ( !response.data.user ) {
      //     $scope.authError = 'Email or Password not right';
      //   }else{
      //     $state.go('app.dashboard-v1');
      //   }
      // }, function(x) {
      //   $scope.authError = 'Server Error';
      // });
    //};
  }])
;