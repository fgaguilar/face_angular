'use strict';
app.factory('Plan', ['$resource',
  function($resource){
    return $resource('http://localhost/face_laravel/public/api/planillas/:planillaId', {}, {
      'get': {method:'GET', params:{planillaId:'@planillaId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);

/*app.factory('Plan', ['$resource',
  function($resource){
    return $resource('http://localhost/face_laravel/public/api/plans/:planId', {}, {
      'get': {method:'GET', params:{planId:'@planId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);*/
/************************************/
app.run(function($locale){
    $locale.NUMBER_FORMATS.GROUP_SEP = ",";
});

app.directive('numericInput', function($filter, $browser, $locale) {
    return {
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModelCtrl) {
            var replaceRegex = new RegExp($locale.NUMBER_FORMATS.GROUP_SEP, 'g');
            var fraction = $attrs.fraction || $locale.NUMBER_FORMATS.PATTERNS[0].maxFrac;
            var listener = function() {
                var value = $element.val().replace(replaceRegex, '')
                $element.val($filter('number')(value, fraction))
            }
            ngModelCtrl.$parsers.push(function(viewValue) {
                var newVal = viewValue.replace(replaceRegex, '');
                var newValAsNumber = newVal * 1;
                if (isNaN(newValAsNumber)){
                    ngModelCtrl.$setValidity(ngModelCtrl.$name+'Numeric', false);
                }
                else{
                    newVal = newValAsNumber.toFixed(fraction);
                    ngModelCtrl.$setValidity(ngModelCtrl.$name+'Numeric', true);
                }
                return newVal;
            })
            ngModelCtrl.$render = function() {
                $element.val($filter('number')(ngModelCtrl.$viewValue, fraction))
            }         
            $element.bind('change', listener);
            $element.bind('keydown', function(event) {
                var key = event.keyCode
                if (key == 91 || (15 < key && key < 19) || (35 <= key && key <= 40)) 
                    return 
            })
        }        
    }
})
/***********************************/
app.controller('ListCtrl', function($scope, Plan) {
   $scope.planilla = Plan.query();
  // $scope.orderProp = 'id';
});

/*app.controller('CreateCtrl', function($scope,$location,$timeout, Plan) {
    $scope.grabar = function() {
      console.log("INGRESO A FormDemoCtrl funcion grabar");
      debugger;
      Plan.save($scope.plans, function() {
        $timeout(function() {
          $location.path('/');
        });
      });
    };
});*/



  // Form controller
app.controller('FormDemoCtrl',function ($scope,$location,$timeout,Plan) {
  console.log("INGRESO A FormDemoCtrl");

    $scope.planilla={};

    $scope.grabar = function() {
      console.log("INGRESO A FormDemoCtrl funcion grabar");
      Plan.save($scope.planilla, function() {
        $timeout(function() {
          $location.path('/');
        });
      });
    };

    $scope.planilla.pesoMermaPesos=1.00;
    $scope.planilla.pesoKilosNetosHumedosFactores=2.2046223;
    $scope.planilla.pesoHumedadFactores=32.15073;
    $scope.planilla.contenidoAgExternoFactores=32.00;
    $scope.planilla.pesoMermaFactores=6.96;
    $scope.planilla.contenidoZnTipoDeCambioFactores=6.96;
    $scope.calcular = function(){
      $scope.planilla.pesoHumedadPeso=($scope.planilla.pesoHumedadPesos*$scope.planilla.pesoKilosNetosHumedosPeso)/100;
      $scope.planilla.pesoMermaPeso=(($scope.planilla.pesoKilosNetosHumedosPeso-$scope.planilla.pesoHumedadPeso)*$scope.planilla.pesoMermaPesos)/100;
      $scope.planilla.pesoKilosNetosSecosPeso=$scope.planilla.pesoKilosNetosHumedosPeso-$scope.planilla.pesoHumedadPeso-$scope.planilla.pesoMermaPeso;
      $scope.planilla.contenidoZnPesokg=$scope.planilla.pesoKilosNetosSecosPeso*$scope.planilla.contenidoZnLeyes/100;
      $scope.planilla.contenidoZnPesolf=$scope.planilla.contenidoZnPesokg*$scope.planilla.pesoKilosNetosHumedosFactores;
      $scope.planilla.contenidoAgPesokg=$scope.planilla.pesoKilosNetosSecosPeso*$scope.planilla.contenidoAgLeyes/1000000;
      $scope.planilla.contenidoAgPesoot=$scope.planilla.contenidoAgPesokg*$scope.planilla.pesoHumedadFactores;
      $scope.planilla.contenidoAgFleteTotalFactores=$scope.planilla.contenidoAgInternoFactores*1+$scope.planilla.contenidoAgExternoFactores*1;
      $scope.planilla.baseZnSus=$scope.planilla.contenidoZnPesolf*$scope.planilla.baseZnCotizaciones;
      $scope.planilla.baseAgSus=$scope.planilla.contenidoAgPesoot*$scope.planilla.baseAgCotizaciones;
      $scope.planilla.baseTotalSus=$scope.planilla.baseZnSus*1+$scope.planilla.baseAgSus*1;
      $scope.planilla.basePromedioSus=$scope.planilla.baseTotalSus*45/100;
      $scope.planilla.baseDiferenciaSus=$scope.planilla.baseTotalSus-$scope.planilla.basePromedioSus;
      $scope.planilla.impuestoZnSus=$scope.planilla.baseZnSus*$scope.planilla.impuestoZnAlicuota/100;
      $scope.planilla.impuestoAgSus=$scope.planilla.baseAgSus*$scope.planilla.impuestoAgAlicuota/100;
      $scope.planilla.impuestoTotalSusSus=$scope.planilla.impuestoZnSus*1+$scope.planilla.impuestoAgSus*1;
      $scope.planilla.impuestoTotalBsSus=$scope.planilla.impuestoTotalSusSus*$scope.planilla.pesoMermaFactores;
      $scope.planilla.baseAgTaraTotalFactores=$scope.planilla.baseZnContenedoresFactores*2050;
      $scope.planilla.baseTotalPesoBrutoFactores=$scope.planilla.pesoKilosNetosHumedosPeso*1+$scope.planilla.baseAgTaraTotalFactores*1;
      $scope.planilla.impuestoZnValorConcentradoFactores=$scope.planilla.baseTotalSus/$scope.planilla.pesoKilosNetosHumedosPeso;
      return "";
    };
  });