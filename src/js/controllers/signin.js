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

app.controller('SigninFormController', ['$scope','$cookies','$state','$http',function ($scope,$cookies,$state,$http) {
  console.log('Ingreso a SigninFormController');
  $scope.login = function(user){
    $http.post('http://mscwsus.minera.local:3000/login', user).success(function(user){
      console.log(user);
      $cookies.fName = user.firstName;
      $cookies.lName = user.lastName;
      $cookies.uName = user.username;
      $cookies.roles = user.roles;
      console.log("======= SigninFormController:$cookies.currentUser ========");
      console.log($cookies.fName);
      console.log($cookies.lName);
      console.log($cookies.uName);
      console.log($cookies.roles);
      $state.go('app.dashboard-v1');
    }).error(function(data, status, headers, config) {
      $scope.authError = 'Usuario o Password Incorrectos';
      console.log('Error en Autenticacion');
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });
  }
}]);
