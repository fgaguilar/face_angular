'use strict';

app.factory('Planilla', ['$resource',
  function($resource){
    return $resource('http://localhost/face_laravel/public/api/planillas', {}, {
      'get': {method:'GET', params:{nodeId:'@planillaId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);

app.controller('ListCtrl', function($scope, Planilla) {
   $scope.planillas = Planilla.query();
  // $scope.orderProp = 'id';
  $scope.p=1;
});

app.controller('EditCtrl',
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

app.controller('CreateCtrl', function($scope, $location, $timeout, $routeParams, Planilla) {
  $scope.parentId = $routeParams.parentId;

  $scope.save = function() {
    Planilla.save($scope.node, function() {
      $timeout(function() {
        $location.path('/');
      });
    });
  };
});
  // Form controller
app.controller('FormDemoCtrl', ['$scope', function ($scope, $location, $timeout, $routeParams, Planilla) {
    $scope.pesoMermaPesos=1.00;
    $scope.pesoKilosNetosHumedosFactores=2.2046223;
    $scope.pesoHumedadFactores=32.15073;
    $scope.contenidoAgExternoFactores=32.00;
    $scope.pesoMermaFactores=6.96;
    $scope.contenidoZnTipoDeCambioFactores=6.96;
    // $scope.contenidoZnLeyes=52.55;
    // $scope.contenidoAgLeyes=466.00;
    // $scope.baseZnCotizaciones=0.95;
    // $scope.baseAgCotizaciones=19.05;
    // $scope.impuestoZnAlicuota=5.00;
    // $scope.impuestoAgAlicuota=6.00;

    $scope.calcular = function(){
      $scope.pesoHumedadPeso=($scope.pesoHumedadPesos*$scope.pesoKilosNetosHumedosPeso)/100;
      $scope.pesoMermaPeso=(($scope.pesoKilosNetosHumedosPeso-$scope.pesoHumedadPeso)*$scope.pesoMermaPesos)/100;
      $scope.pesoKilosNetosSecosPeso=$scope.pesoKilosNetosHumedosPeso-$scope.pesoHumedadPeso-$scope.pesoMermaPeso;
      $scope.contenidoZnPesokg=$scope.pesoKilosNetosSecosPeso*$scope.contenidoZnLeyes/100;
      $scope.contenidoZnPesolf=$scope.contenidoZnPesokg*$scope.pesoKilosNetosHumedosFactores;
      $scope.contenidoAgPesokg=$scope.pesoKilosNetosSecosPeso*$scope.contenidoAgLeyes/1000000;
      $scope.contenidoAgPesoot=$scope.contenidoAgPesokg*$scope.pesoHumedadFactores;
      $scope.contenidoAgFleteTotalFactores=$scope.contenidoAgInternoFactores*1+$scope.contenidoAgExternoFactores*1;
      $scope.baseZnSus=$scope.contenidoZnPesolf*$scope.baseZnCotizaciones;
      $scope.baseAgSus=$scope.contenidoAgPesoot*$scope.baseAgCotizaciones;
      $scope.baseTotalSus=$scope.baseZnSus*1+$scope.baseAgSus*1;
      $scope.basePromedioSus=$scope.baseTotalSus*45/100;
      $scope.baseDiferenciaSus=$scope.baseTotalSus-$scope.basePromedioSus;
      $scope.impuestoZnSus=$scope.baseZnSus*$scope.impuestoZnAlicuota/100;
      $scope.impuestoAgSus=$scope.baseAgSus*$scope.impuestoAgAlicuota/100;
      $scope.impuestoTotalSusSus=$scope.impuestoZnSus*1+$scope.impuestoAgSus*1;
      $scope.impuestoTotalBsSus=$scope.impuestoTotalSusSus*$scope.pesoMermaFactores;
      $scope.baseAgTaraTotalFactores=$scope.baseZnContenedoresFactores*2050;
      $scope.baseTotalPesoBrutoFactores=$scope.pesoKilosNetosHumedosPeso*1+$scope.baseAgTaraTotalFactores*1;
      $scope.impuestoZnValorConcentradoFactores=$scope.baseTotalSus/$scope.pesoKilosNetosHumedosPeso;
      return "";
    }
    $scope.save = function() {
    Planilla.save($scope.planilla, function() {
      $timeout(function() {
        $location.path('/');
      });
    });
  };

  }]);