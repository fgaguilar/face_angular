'use strict';

/* Controllers */
  // signin controller
// app.controller('SigninFormController', ['$scope', '$http', '$state', '$rootScope', function($scope, $http, $state, $rootScope) {
//     //$scope.user = {};
//     $scope.authError = null;
//     $scope.login = function(user) {
//       console.log(user);
//       $scope.authError = null;
//       // Try to login
//       $http.post('http://localhost:3000/login', user)
//       .then(function(response) {
//         if ( !response.data.user ) {
//           $scope.authError = 'Email or Password not right';
//         }else{
//           $rootScope.currentUser = user;
//           $state.go('app.dashboard-v1');
//         }
//       }, function(x) {
//         $scope.authError = 'Server Error';
//       });
//     };
//   }]);

app.controller('SigninFormController', ['$scope','$state', '$http', '$rootScope','$location', function ($scope, $state, $http,$rootScope,$location) {
  $scope.login = function(user){
    console.log(user);
    $http.post('http://localhost:3000/login', user)
    .success(function(user){
      console.log(user);
      $rootScope.currentUser = user;
      $state.go('app.dashboard-v1');
      //$location.url('/profile');
    });
  }
}]);