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
app.controller('ListZincCtrl', function($scope, Plan) {
   $scope.planilla = Plan.query();
  // $scope.orderProp = 'id';
});
app.controller('CreateCtrl', function($scope,$location,$timeout, Plan) {
    $scope.grabar = function() {
      Plan.save($scope.plans, function() {
        $timeout(function() {
          $location.path('/');
        });
      });
    };
});
  // Form controller
app.controller('FormVacioCtrl',function ($scope,$location,$timeout,Plan) {
    console.groupCollapsed("CreateCtrl");
    $scope.planilla={};
    $scope.grabar = function() {
      console.error("Ingreso a grabar");
      Plan.save($scope.planilla, function() {
        $timeout(function() {
          $location.path('/');
        });
      });
    };
    console.groupEnd();

    $scope.planilla.pesoMermaPesos=1.00;
    $scope.planilla.pesoKilosNetosHumedosFactores=2.2046223;
    $scope.planilla.pesoHumedadFactores=32.15073;
    $scope.planilla.contenidoAgExternoFactores=32.00;
    $scope.planilla.pesoMermaFactores=6.96;
    $scope.planilla.contenidoZnTipoDeCambioFactores=6.96;
    $scope.calcular = function(){
      console.log('Ingreso a Calcular!!!');
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

app.controller('FormUnoCtrl',function ($scope,$location,$timeout,$stateParams,Plan) {    
  var planillaId = $stateParams.planId;
  $scope.planillaC={};
  $scope.planilla2={};
  $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos){
    console.log($scope);
    $scope.planilla=datos;
    console.log("DATOS");
    console.log($scope.planilla);
    $scope.calcular = function(){
      console.log('Ingreso a Calcular!!!');
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
  console.groupCollapsed("FormUnoCtrl");
  $scope.grabar = function() {
    console.error("Ingreso a actualizar");
    Plan.update({planillaId: $scope.planilla.id}, $scope.planilla, function() {
      $timeout(function() {
        $location.path('/');
      });
    });
  };
  console.groupEnd();  
 
});


app.controller('PlanCalculoCtrl',function ($scope,$location,$timeout,$stateParams,Plan) {
  var planillaId = $stateParams.planId;
  $scope.planillaC={};
  $scope.planilla2={};
  $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos){
    console.log($scope);
    $scope.planillaC.v7=datos.contenidoZnLeyes;
    $scope.planillaC.d4=$scope.planillaC.v7;
    $scope.planillaC.v6=datos.pesoMermaFactores;
    $scope.planillaC.c7=datos.pesoKilosNetosHumedosPeso;
    $scope.planillaC.v9=datos.pesoHumedadPesos;
    $scope.planillaC.x6=$scope.planillaC.c7*$scope.planillaC.v9/100;
    $scope.planillaC.v10=datos.pesoMermaPesos;
    $scope.planillaC.v11=$scope.planillaC.v9+$scope.planillaC.v10;
    $scope.planillaC.z6=$scope.planillaC.c7*$scope.planillaC.v11/100;
    $scope.planillaC.d7=8.57;
    $scope.planillaC.x7=($scope.planillaC.c7-$scope.planillaC.x6)*$scope.planillaC.v10/100;
    $scope.planillaC.c8=$scope.planillaC.c7*$scope.planillaC.v9/100;
    $scope.planillaC.c9=($scope.planillaC.c7-$scope.planillaC.c8)*$scope.planillaC.v10/100;
    $scope.planillaC.z7=$scope.planillaC.c8+$scope.planillaC.c9;
    $scope.planillaC.v8=datos.contenidoAgLeyes;
    $scope.planillaC.x8=$scope.planillaC.x6+$scope.planillaC.x7;
    $scope.planillaC.z8=$scope.planillaC.z6-$scope.planillaC.z7;
    $scope.planillaC.c10=$scope.planillaC.c8+$scope.planillaC.c9;
    $scope.planillaC.c11=$scope.planillaC.c7-$scope.planillaC.c10;
    $scope.planillaC.c12=$scope.planillaC.d4;
    $scope.planillaC.c13=$scope.planillaC.c11*$scope.planillaC.c12/100;
    $scope.planillaC.c14=$scope.planillaC.c13*datos.pesoKilosNetosHumedosFactores;
    $scope.planillaC.d14=58.70;
    $scope.planillaC.v14=$scope.planillaC.c13;
    $scope.planillaC.d20=$scope.planillaC.v8;
    $scope.planillaC.c21=$scope.planillaC.c11;    
    $scope.planillaC.c22=$scope.planillaC.c21*$scope.planillaC.d20/1000;
    $scope.planillaC.c23=$scope.planillaC.c22/1000;
    $scope.planillaC.v15=$scope.planillaC.c23;
    $scope.planillaC.v16=$scope.planillaC.v14+$scope.planillaC.v15;
    $scope.planillaC.d23=0.98;
    $scope.planillaC.w14=$scope.planillaC.v14/$scope.planillaC.v16;
    $scope.planillaC.x14=$scope.planillaC.c7*$scope.planillaC.w14;
    $scope.planillaC.y14=$scope.planillaC.x8*$scope.planillaC.w14;
    $scope.planillaC.z14=$scope.planillaC.x14-$scope.planillaC.y14;
    $scope.planillaC.c15=$scope.planillaC.c13/100;
    $scope.planillaC.w15=$scope.planillaC.v15/$scope.planillaC.v16;   
    $scope.planillaC.x15=$scope.planillaC.c7*$scope.planillaC.w15;
    $scope.planillaC.y15=$scope.planillaC.x8*$scope.planillaC.w15;
    $scope.planillaC.z15=$scope.planillaC.x15-$scope.planillaC.y15;
    $scope.planillaC.d16=datos.baseZnCotizaciones;
    $scope.planillaC.w16=$scope.planillaC.w14+$scope.planillaC.w15;
    $scope.planillaC.x16=$scope.planillaC.x14+$scope.planillaC.x15;
    $scope.planillaC.z16=$scope.planillaC.z14+$scope.planillaC.z15;
    $scope.planillaC.c17=$scope.planillaC.d16*$scope.planillaC.c14;
    $scope.planillaC.d17=436;
    $scope.planillaC.c18=datos.impuestoZnAlicuota;
    $scope.planillaC.y18=$scope.planillaC.w14*$scope.planillaC.x8;
    $scope.planillaC.z18=$scope.planillaC.x14-$scope.planillaC.y18;
    $scope.planillaC.c19=$scope.planillaC.c17*$scope.planillaC.c18/100;
    $scope.planillaC.y19=$scope.planillaC.w15*$scope.planillaC.x8;
    $scope.planillaC.z19=$scope.planillaC.x15-$scope.planillaC.y19;
    $scope.planillaC.u20=$scope.planillaC.d20/100;
    $scope.planillaC.z20=$scope.planillaC.z18+$scope.planillaC.z19;
    $scope.planillaC.c24=$scope.planillaC.c23*datos.pesoHumedadFactores;
    $scope.planillaC.d25=datos.baseAgCotizaciones;
    $scope.planillaC.c26=$scope.planillaC.c24*$scope.planillaC.d25;
    $scope.planillaC.c27=datos.impuestoAgAlicuota;
    $scope.planillaC.c28=$scope.planillaC.c26*$scope.planillaC.c27/100;
    $scope.planillaC.c29=$scope.planillaC.c28+$scope.planillaC.c19;
    $scope.planillaC.c30=$scope.planillaC.c28+$scope.planillaC.c29;
    $scope.planillaC.c31=$scope.planillaC.c30*$scope.planillaC.v6;
    $scope.planillaC.c32=$scope.planillaC.c26+$scope.planillaC.c17;
  });
});

app.controller('RegaliaMineraCtrl',function ($scope,$location,$timeout,$stateParams,Plan) {
  var planillaId = $stateParams.planId;
  $scope.planillaC={};
  $scope.planilla2={};
  $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos){
    
    $scope.planillaC.v7=datos.contenidoZnLeyes;
    $scope.planillaC.d4=$scope.planillaC.v7;
    $scope.planillaC.v6=datos.pesoMermaFactores;
    $scope.planillaC.c7=datos.pesoKilosNetosHumedosPeso;
    $scope.planillaC.v9=datos.pesoHumedadPesos;
    $scope.planillaC.x6=$scope.planillaC.c7*$scope.planillaC.v9/100;
    $scope.planillaC.v10=datos.pesoMermaPesos;
    $scope.planillaC.v11=$scope.planillaC.v9+$scope.planillaC.v10;
    $scope.planillaC.z6=$scope.planillaC.c7*$scope.planillaC.v11/100;
    $scope.planillaC.d7=8.57;
    $scope.planillaC.x7=($scope.planillaC.c7-$scope.planillaC.x6)*$scope.planillaC.v10/100;
    $scope.planillaC.c8=$scope.planillaC.c7*$scope.planillaC.v9/100;
    $scope.planillaC.c9=($scope.planillaC.c7-$scope.planillaC.c8)*$scope.planillaC.v10/100;
    $scope.planillaC.z7=$scope.planillaC.c8+$scope.planillaC.c9;
    $scope.planillaC.v8=datos.contenidoAgLeyes;
    $scope.planillaC.x8=$scope.planillaC.x6+$scope.planillaC.x7;
    $scope.planillaC.z8=$scope.planillaC.z6-$scope.planillaC.z7;
    $scope.planillaC.c10=$scope.planillaC.c8+$scope.planillaC.c9;
    $scope.planillaC.c11=$scope.planillaC.c7-$scope.planillaC.c10;
    $scope.planillaC.c12=$scope.planillaC.d4;
    $scope.planillaC.c13=$scope.planillaC.c11*$scope.planillaC.c12/100;
    $scope.planillaC.c14=$scope.planillaC.c13*datos.pesoKilosNetosHumedosFactores;
    $scope.planillaC.d14=58.70;
    $scope.planillaC.v14=$scope.planillaC.c13;
    $scope.planillaC.d20=$scope.planillaC.v8;
    $scope.planillaC.c21=$scope.planillaC.c11;    
    $scope.planillaC.c22=$scope.planillaC.c21*$scope.planillaC.d20/1000;
    $scope.planillaC.c23=$scope.planillaC.c22/1000;
    $scope.planillaC.v15=$scope.planillaC.c23;
    $scope.planillaC.v16=$scope.planillaC.v14+$scope.planillaC.v15;
    $scope.planillaC.d23=0.98;
    $scope.planillaC.w14=$scope.planillaC.v14/$scope.planillaC.v16;
    $scope.planillaC.x14=$scope.planillaC.c7*$scope.planillaC.w14;
    $scope.planillaC.y14=$scope.planillaC.x8*$scope.planillaC.w14;
    $scope.planillaC.z14=$scope.planillaC.x14-$scope.planillaC.y14;
    $scope.planillaC.c15=$scope.planillaC.c13/100;
    $scope.planillaC.w15=$scope.planillaC.v15/$scope.planillaC.v16;   
    $scope.planillaC.x15=$scope.planillaC.c7*$scope.planillaC.w15;
    $scope.planillaC.y15=$scope.planillaC.x8*$scope.planillaC.w15;
    $scope.planillaC.z15=$scope.planillaC.x15-$scope.planillaC.y15;
    $scope.planillaC.d16=datos.baseZnCotizaciones;
    $scope.planillaC.w16=$scope.planillaC.w14+$scope.planillaC.w15;
    $scope.planillaC.x16=$scope.planillaC.x14+$scope.planillaC.x15;
    $scope.planillaC.z16=$scope.planillaC.z14+$scope.planillaC.z15;
    $scope.planillaC.c17=$scope.planillaC.d16*$scope.planillaC.c14;
    $scope.planillaC.d17=436;
    $scope.planillaC.c18=datos.impuestoZnAlicuota;
    $scope.planillaC.y18=$scope.planillaC.w14*$scope.planillaC.x8;
    $scope.planillaC.z18=$scope.planillaC.x14-$scope.planillaC.y18;
    $scope.planillaC.c19=$scope.planillaC.c17*$scope.planillaC.c18/100;
    $scope.planillaC.y19=$scope.planillaC.w15*$scope.planillaC.x8;
    $scope.planillaC.z19=$scope.planillaC.x15-$scope.planillaC.y19;
    $scope.planillaC.u20=$scope.planillaC.d20/100;
    $scope.planillaC.z20=$scope.planillaC.z18+$scope.planillaC.z19;
    $scope.planillaC.c24=$scope.planillaC.c23*datos.pesoHumedadFactores;
    $scope.planillaC.d25=datos.baseAgCotizaciones;
    $scope.planillaC.c26=$scope.planillaC.c24*$scope.planillaC.d25;
    $scope.planillaC.c27=datos.impuestoAgAlicuota;
    $scope.planillaC.c28=$scope.planillaC.c26*$scope.planillaC.c27/100;
    $scope.planillaC.c29=$scope.planillaC.c28+$scope.planillaC.c19;
    $scope.planillaC.c30=$scope.planillaC.c28+$scope.planillaC.c29;
    $scope.planillaC.c31=$scope.planillaC.c30*$scope.planillaC.v6;
    $scope.planillaC.c32=$scope.planillaC.c26+$scope.planillaC.c17;
    $scope.planillaC.fecha=datos.pesoKilosNetosSecosFactores;
    $scope.planillaC.tipoCambio=datos.pesoMermaFactores;
    $scope.planillaC.numeroLote=datos.pesoLoteFactores;
    $scope.planillaC.pesoBrutoZinc=$scope.planillaC.x14;
    $scope.planillaC.pesoNetoZinc=$scope.planillaC.z14;
    $scope.planillaC.leyMineralZinc=$scope.planillaC.d4;
    $scope.planillaC.pesoFinoZinc=$scope.planillaC.c14;
    $scope.planillaC.cotizacionZinc=$scope.planillaC.d16;
    $scope.planillaC.valorBrutoZinc=$scope.planillaC.c17;
    $scope.planillaC.alicuotaZinc=$scope.planillaC.c18;
    $scope.planillaC.rmZinc=$scope.planillaC.c19;
    $scope.planillaC.pesoBrutoPlata=$scope.planillaC.x15;
    $scope.planillaC.pesoNetoPlata=$scope.planillaC.z15;
    $scope.planillaC.leyMineralPlata=$scope.planillaC.d20;
    $scope.planillaC.pesoFinoPlata=$scope.planillaC.c24;
    $scope.planillaC.cotizacionPlata=$scope.planillaC.d25;
    $scope.planillaC.valorBrutoPlata=$scope.planillaC.c26;
    $scope.planillaC.alicuotaPlata=$scope.planillaC.c27;
    $scope.planillaC.rmPlata=$scope.planillaC.c28;
    $scope.planillaC.sumaPesoBruto=$scope.planillaC.pesoBrutoZinc+$scope.planillaC.pesoBrutoPlata;
    $scope.planillaC.sumaPesoNeto=$scope.planillaC.pesoNetoZinc+$scope.planillaC.pesoNetoPlata;
    $scope.planillaC.sumaValorUSD=$scope.planillaC.valorBrutoZinc+$scope.planillaC.valorBrutoPlata;
    $scope.planillaC.sumaRMUSD=$scope.planillaC.rmZinc+$scope.planillaC.rmPlata;
    $scope.planillaC.sumaValorBS=$scope.planillaC.sumaValorUSD*$scope.planillaC.tipoCambio;
    $scope.planillaC.sumaRMBS=$scope.planillaC.sumaRMUSD*$scope.planillaC.tipoCambio;
  });
});

app.controller('FacturaExportacionCtrl',function ($scope,$location,$timeout,$stateParams,Plan) {
  console.log("Ingreso a FacturaExportacionCtrl");
  var planillaId = $stateParams.planId;
  $scope.planillaC={};
  $scope.planilla2={};
  $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos){
    $scope.planillaC=datos;
    console.log($scope.planillaC);
  });
});