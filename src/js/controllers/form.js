'use strict';

app.run(function($locale){
    $locale.NUMBER_FORMATS.GROUP_SEP = ",";
});

app.controller('listaEmpaqueCtrl',function ($scope,$stateParams,Plan) {
  console.log("Ingreso a ListaEmpaqueCtrl");
  var planillaId = $stateParams.planId;
  $scope.planillaC={};
  $scope.planilla2={};
  console.log(planillaId);
  $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos){
    console.log('Ingreso a get');

    $scope.planillaC.planilla=$scope.planilla2.planilla;
    $scope.planillaC.contenidoListaEmpaqueFactores=datos.contenidoListaEmpaqueFactores;
    $scope.planillaC.pesoKilosNetosSecosFactores=datos.pesoKilosNetosSecosFactores;
    $scope.planillaC.pesoLoteFactores=datos.pesoLoteFactores;
    $scope.planillaC.id=datos.id;
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
    $scope.planillaC.totalx=$scope.planillaC.x14+$scope.planillaC.x15;
    $scope.planillaC.totalz=$scope.planillaC.z14+$scope.planillaC.z15;
    $scope.tipoPlanilla=planillaId;
  });
  console.log('Salio de get');
  $scope.imprimir = function() {  
    console.log($scope.planilla2);
        $scope.url="http://mscwsus.minera.local:8080/birt/frameset?__report=reportes/lista_de_empaque.rptdesign&id=" + $scope.planilla2.id;
        window.open($scope.url);  
  };

});

app.controller('ListZincCtrlGral',function ($scope,$stateParams,PlanTipo) {
  console.log("Ingreso a ListZincCtrlGral");
  $scope.planilla={};
  $scope.planilla2={};
  $scope.planilla2=PlanTipo.get(function(datos){
    $scope.planilla=datos;
  });
});

app.controller('ListZincCtrl',function ($scope,$stateParams,PlanTipo,Factura) {
  console.log("Ingreso a ListZincCtrl");
  var tipoPlanilla = $stateParams.tipoPlanilla;
  $scope.planilla={};
  $scope.planilla2={};
  $scope.planilla2=PlanTipo.get({'tipoPlanilla': tipoPlanilla}, function(datos){
    $scope.planilla=datos;
    $scope.tipoPlanilla=tipoPlanilla;
  });
});

app.controller('ListPlomoCtrl',function ($scope,$stateParams,PlanTipo,Factura) {
  console.log("Ingreso a ListZincCtrl");
  var tipoPlanilla = $stateParams.tipoPlanilla;
  $scope.planilla={};
  $scope.planilla2={};
  $scope.planilla2=PlanTipo.get({'tipoPlanilla': tipoPlanilla}, function(datos){
    $scope.planilla=datos;
    $scope.tipoPlanilla=tipoPlanilla;
  });
});

app.controller('CreateCtrl', function($scope,$location,$timeout, Plan) {
  console.log('Ingreso a CreateCtrl');
    $scope.grabar = function() {
      Plan.save($scope.plans, function() {
        $timeout(function() {
          $location.path('/');
        });
      });
    };
});
  // Form controller
app.controller('FormVacioCtrl',function ($scope,$rootScope,$cookies,$location,$timeout,$stateParams,$state,Plan,Parametro,Dosificacion,Puerto,Paise) {
    console.log("Ingreso a FormVacioCtrl");
    var tipoPlanilla = $stateParams.tipoPlanilla;
    var ide = 0;

    $scope.puerto={};
    $scope.puerto2={};
    $scope.puertoP={};
    $scope.puerto2=Puerto.query(function(datos){
      $scope.puerto=datos;
    });

    $scope.pais={};
    $scope.pais2={};
    $scope.paisP={};
    $scope.pais2=Paise.query(function(datos){
      $scope.paise=datos;
    });  

    $scope.mostrarPais = function(item){
      console.log("MostrarPais");
      console.log(item);
      $scope.puerto2=Puerto.get({'puertoId': item}, function(datos){
        console.log("Ingreso a Get puerto de MostrarPais");
        $scope.puertoP=datos;
        console.log($scope.puertoP.pais);
        $scope.pais2=Paise.get({'paiseId': $scope.puertoP.pais}, function(datos){
          console.log("Ingreso a Get Pais de MostrarPais");
          $scope.paisP=datos;
          console.log($scope.paisP.descripcion);
          $scope.planilla.paisDestino=$scope.paisP.id;
          $scope.paisDestinoDescripcion=$scope.paisP.descripcion;
        });
      });      
    }

    $scope.planilla={};
    $scope.planillaC={};
    $scope.grabar = function() {
      console.log("Antes de grabar Planilla");
      Plan.save($scope.planilla, function() {
        console.log("Ingreso a grabar Planilla");
        $timeout(function() {
            $scope.successTextAlert = "Planilla Guardada";
            $scope.showSuccessAlert = true;
            $scope.switchBool = function (value) {
              $scope[value] = !$scope[value];
            };        	
        });
      });
      console.log("Salio de grabar");
      if (tipoPlanilla=='ZINC'){
        $state.go('app.export.planillaZincListado',{'tipoPlanilla':tipoPlanilla});
      }
      else {
        $state.go('app.export.planillaPlomoListado',{'tipoPlanilla':tipoPlanilla});
      }
    };
    if (tipoPlanilla=='ZINC'){
      $scope.tipoProducto='Zn'; 
      ide = 1;   
    }
    else {
      $scope.tipoProducto='Pb';    
      ide = 2;   
    }
    $scope.planilla.planilla=tipoPlanilla;
    $scope.planilla.created_by=$cookies.uName;
    $scope.parametro2={};
    $scope.parametro2=Parametro.get({'parametroId': ide}, function(datos){
    	console.log('Ingreso a GET!!!!!!');
      $scope.planilla.pesoHumedadPesos=datos.humedad;
      $scope.planilla.pesoMermaPesos=datos.merma;
      $scope.planilla.contenidoZnLeyes=datos.leyes;
      $scope.planilla.baseZnCotizaciones=datos.cotizaciones;
      $scope.planilla.impuestoZnAlicuota=datos.alicuotas;
      $scope.planilla.contenidoAgLeyes=datos.leyesAg;
      $scope.planilla.baseAgCotizaciones=datos.cotizacionesAg;
      $scope.planilla.impuestoAgAlicuota=datos.alicuotasAg;
      $scope.planilla.puertoDestino=datos.puertoDestino;
      $scope.planilla.paisDestino=datos.paisDestino;
      $scope.planilla.pesoKilosNetosHumedosFactores=datos.factorKg1;
      $scope.planilla.pesoHumedadFactores=datos.factorKg2;
      $scope.planilla.contenidoAgExternoFactores=datos.externo;
      $scope.planilla.pesoMermaFactores=datos.tipoCambioANB;
      $scope.planilla.contenidoZnTipoDeCambioFactores=datos.tipoCambioOficial;   
      if (tipoPlanilla=='ZINC') {
        $scope.planilla.pesoLoteFactores='EXMSC-Z';
      }
      else {
        $scope.planilla.pesoLoteFactores='EXMSC-P';
      }
      console.log("Antes de recuperar dosificacion");
      console.log($scope.planilla);
      console.log("===============================");
      $scope.dosificacion2={};
      $scope.dosificacion2= Dosificacion.get({'dosificacionId': 1}, function(datos2){
      	$scope.planilla.impuestoFacturaFactores=datos2.numero;
      });      

    });

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

app.controller('FormUnoCtrl',function ($scope,$rootScope,$cookies,$location,$timeout,$stateParams,Plan,Puerto,Paise) {
  console.log('Ingreso a FormUnoCtrl');
  var planillaId = $stateParams.planId;

  $scope.puerto={};
  $scope.puerto2={};
  $scope.puertoP={};
  $scope.puerto2=Puerto.query(function(datos){
    $scope.puerto=datos;
  });

  $scope.pais={};
  $scope.pais2={};
  $scope.paisP={};
  $scope.pais2=Paise.query(function(datos){
    $scope.paise=datos;
  });  

  $scope.mostrarPais = function(item){
    console.log("MostrarPais");
    console.log(item);
    $scope.puerto2=Puerto.get({'puertoId': item}, function(datos){
      console.log("Ingreso a Get puerto de MostrarPais");
      $scope.puertoP=datos;
      console.log($scope.puertoP.pais);
      $scope.pais2=Paise.get({'paiseId': $scope.puertoP.pais}, function(datos){
        console.log("Ingreso a Get Pais de MostrarPais");
        $scope.paisP=datos;
        console.log($scope.paisP.descripcion);
        $scope.planilla.paisDestino=$scope.paisP.id;
        $scope.paisDestinoDescripcion=$scope.paisP.descripcion;
      });
    });      
  }

  $scope.planillaC={};
  $scope.planilla2={};
  console.log('Antes de get');
  $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos){
    console.log($scope);
    $scope.planilla=datos;
    $scope.planilla.updated_by=$cookies.uName;
    console.log("DATOS");
    console.log($scope.planilla);
    console.log("DATOS");
    console.log($scope.planilla.planilla);
    if ($scope.planilla.planilla=='ZINC'){
      console.log("Entro ZINC");
      $scope.tipoProducto='Zn';    
    }
    else {
    console.log($scope);
    console.log("Entro PLOMO");
      $scope.tipoProducto='Pb';    
    }
    $scope.pais2=Paise.get({'paiseId': $scope.planilla.paisDestino}, function(datos){
      console.log("Ingreso a Get Pais de pais destino");
      $scope.paisP=datos;
      console.log($scope.paisP.descripcion);
      $scope.paisDestinoDescripcion=$scope.paisP.descripcion;
    });    
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
  var isDate = function(date) {
      return ((new Date(date)).toString() !== "Invalid Date") ? true : false;         
  }

  console.groupCollapsed("FormUnoCtrl");
  $scope.grabar = function() {
    console.log("Ingreso a actualizar " + $scope.planilla.pesoKilosNetosSecosFactores);
    if ($scope.planilla.pesoKilosNetosSecosFactores.getFullYear) {
      $scope.anio=$scope.planilla.pesoKilosNetosSecosFactores.getFullYear();
      console.log("Anio1 "+$scope.anio);
    }
    else {
      $scope.anio=$scope.planilla.pesoKilosNetosSecosFactores.substr(0, 4);
      console.log("Anio2 "+$scope.anio);
    }

    if ($scope.planilla.pesoKilosNetosSecosFactores.getMonth) {
      $scope.mes=$scope.planilla.pesoKilosNetosSecosFactores.getMonth();
      console.log("Mes1 "+$scope.mes);
    }
    else {
      $scope.mes=$scope.planilla.pesoKilosNetosSecosFactores.substr(5, 2);
      console.log("Mes2 "+$scope.mes);
    }

    if ($scope.planilla.pesoKilosNetosSecosFactores.getDate) {
      $scope.dia=$scope.planilla.pesoKilosNetosSecosFactores.getDate();
      console.log("Dia1 "+$scope.dia);
    }
    else {
      $scope.dia=$scope.planilla.pesoKilosNetosSecosFactores.substr(8, 2);
      console.log("Dia2 "+$scope.dia);
    }
    $scope.miFecha = new Date($scope.anio,$scope.mes,$scope.dia);
    $scope.planilla.pesoKilosNetosSecosFactores=$scope.miFecha;
    Plan.update({planillaId: $scope.planilla.id}, $scope.planilla, function() {
      $timeout(function() {
        $location.path('/');
      });
    });
  };
  console.groupEnd();  
});

app.controller('PlanCalculoCtrl',function ($scope,$location,$timeout,$stateParams,Plan,Plancalculo) {
  console.log('Ingreso a PlanCalculoCtrl');
  var planillaId = $stateParams.planId;
  $scope.planillaC={};
  $scope.planillaT={};
  $scope.planilla2={};
  $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos){
    console.log($scope);
    $scope.planillaC.planilla=$scope.planilla2.planilla;
    $scope.planillaC.planilla_id=planillaId;
    if ($scope.planillaC.planilla=="ZINC") {
      $scope.plan="Zn";
    }
    else {
      $scope.plan="Pb";      
    }
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
    $scope.planillaT=Plancalculo.get({'planillaId': planillaId}, function(datos2){
      console.log("Ingreso a querer grabar calculo " + datos2.length);
      if (datos2.length==0){
        console.log("No existe calculo");
        Plancalculo.save($scope.planillaC, function() {
          console.log("Ingreso a grabar PlanillaCalculo");
          $timeout(function() {
            $scope.successTextAlert = "PlanillaCalculo Guardada";
            $scope.showSuccessAlert = true;
            $scope.switchBool = function (value) {
              $scope[value] = !$scope[value];
            };
          });
        });
      }
      else {
        console.log("Existe calculo");
        Plancalculo.update({planillaId: datos2[0].id}, $scope.planillaC, function() {
          $timeout(function() {
            $scope.successTextAlert = "PlanillaCalculo Actualizado";
            $scope.showSuccessAlert = true;
            $scope.switchBool = function (value) {
              $scope[value] = !$scope[value];
            };
          });
        });
      }
    });
  });
  $scope.imprimir = function() {  
    console.log($scope.planilla2);
        $scope.url="http://mscwsus.minera.local:8080/birt/frameset?__report=reportes/plan_de_calculos.rptdesign&id=" + $scope.planilla2.id;
        window.open($scope.url);  
  };
});

app.controller('RegaliaMineraCtrl',function ($scope,$location,$timeout,$stateParams,Plan) {
  console.log('Ingreso a RegaliaMineraCtrl');
  var planillaId = $stateParams.planId;
  $scope.planillaC={};
  $scope.planilla2={};
  $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos){
    $scope.planillaC.planilla=$scope.planilla2.planilla;
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
 console.log('Salio de get');
  $scope.imprimir = function() {  
    console.log($scope.planilla2);
        $scope.url="http://mscwsus.minera.local:8080/birt/frameset?__report=reportes/regalia_minera.rptdesign&id=" + $scope.planilla2.id;
        window.open($scope.url);  
  };
});

app.controller('M03Ctrl',function ($scope,$location,$timeout,$stateParams,Plan) {
  console.log('Ingreso a M03Ctrl');
  var planillaId = $stateParams.planId;
  $scope.planillaC={};
  $scope.planilla2={};
  $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos){
    $scope.planillaC.planilla=$scope.planilla2.planilla;
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
console.log('Salio de get');
  $scope.imprimir = function() {  
    console.log($scope.planilla2);
        $scope.url="http://mscwsus.minera.local:8080/birt/frameset?__report=reportes/m-03.rptdesign&id=" + $scope.planilla2.id;
        window.open($scope.url);  
  };
});

app.controller('FacturaExportacionCtrl',function ($scope,$location,$cookies,$state,$timeout,$stateParams,Plan,Factura,Parametro,Facturac) {
  console.log("Ingreso a FacturaExportacionCtrl");
  var planillaId = $stateParams.planId;
  var ide = 0;
  $scope.planillaC={};
  $scope.planilla2={};
  $scope.factura={};
  $scope.factura2={};
  $scope.factura2=Facturac.get({'planillaId': planillaId}, function(datos2){
  	console.log("DATOS 2 !!!!!!!");
    console.log(datos2.length);
    $scope.longitud=true;  
    if (datos2.length==0){
      $scope.longitud=false;      
      $scope.planilla2=Plan.get({'planillaId': planillaId}, function(datos1){
        $scope.planillaC=datos1;
        $scope.tipoPlanilla=datos1.planilla;
        $scope.factura.nit="0";
        $scope.factura.fecha=datos1.pesoKilosNetosSecosFactores;
        $scope.factura.factura=datos1.impuestoFacturaFactores;
        $scope.factura.puertoDestino=datos1.puertoDestino;
        $scope.factura.paisDestino=datos1.paisDestino;
        $scope.factura.numeroLote=datos1.pesoLoteFactores;
        $scope.factura.pesoKilosNetosHumedosPeso=datos1.pesoKilosNetosHumedosPeso;
        $scope.factura.pesoHumedadPesos=datos1.pesoHumedadPesos;
        $scope.factura.pesoHumedadPeso=datos1.pesoHumedadPeso;
        $scope.factura.pesoMermaPesos=datos1.pesoMermaPesos;
        $scope.factura.pesoMermaPeso=datos1.pesoMermaPeso;
        $scope.factura.contenidoZnLeyes=datos1.contenidoZnLeyes;
        $scope.factura.contenidoZnPesokg=datos1.contenidoZnPesokg;
        $scope.factura.contenidoZnPesolf=datos1.contenidoZnPesolf;
        $scope.factura.baseZnCotizaciones=datos1.baseZnCotizaciones;
        $scope.factura.pesoKilosNetosSecosPeso=datos1.pesoKilosNetosSecosPeso;
        $scope.factura.contenidoAgLeyes=datos1.contenidoAgLeyes;
        $scope.factura.contenidoAgPesokg=datos1.contenidoAgPesokg;
        $scope.factura.baseAgCotizaciones=datos1.baseAgCotizaciones;
        $scope.factura.contenidoAgPesoot=datos1.contenidoAgPesoot;
        $scope.factura.baseZnSus=datos1.baseZnSus;
        $scope.factura.baseAgSus=datos1.baseAgSus;
        $scope.factura.baseTotalSus=datos1.baseTotalSus;
        $scope.factura.basePromedioSus=datos1.basePromedioSus;
        $scope.factura.baseDiferenciaSus=datos1.baseDiferenciaSus;
        $scope.factura.tipoCambio=datos1.pesoMermaFactores;
        $scope.factura.baseDiferenciaBs=$scope.factura.baseDiferenciaSus*$scope.factura.tipoCambio;
        $scope.factura.planilla_id=planillaId;
        $scope.factura.control='';
        $scope.factura.autorizacion='';
        $scope.factura.vencimiento='';
        $scope.factura.literal1='';
        $scope.factura.literal2='';
        $scope.factura.literal3='';
        $scope.factura.created_by=$cookies.uName;
        if (datos1.planilla=="ZINC"){
          ide=1;
        }
        else { 
          ide=2;
        } 
        $scope.parametro2={};
        $scope.parametro2=Parametro.get({'parametroId': ide}, function(datos){
          $scope.factura.comprador=datos.comprador;
          $scope.factura.direccion=datos.direccion;
          $scope.factura.puertoTransito=datos.puerto;
          $scope.factura.origen=datos.origen;
          $scope.factura.concentrado=datos.concentrado;
          $scope.factura.partida1=datos.partida1;
          $scope.factura.partida2=datos.partida2;
        });
      });//fin Plan.get
    }
  });
  $scope.grabar = function() {
    console.log("Ingreso a Guardar");
    console.log($scope.factura.planilla_id);
    Factura.save($scope.factura, function() {
      $timeout(function() {
        $scope.url="http://mscwsus.minera.local:8080/birt/frameset?__report=reportes/new_report.rptdesign&id=" + $scope.factura.planilla_id;
        window.open($scope.url);
        if ($scope.tipoPlanilla=='ZINC'){
          $state.go('app.export.planillaZincListado',{'tipoPlanilla':$scope.tipoPlanilla});
        }
        else {
          $state.go('app.export.planillaPlomoListado',{'tipoPlanilla':$scope.tipoPlanilla});
        }
      });
    });
  };
});

app.controller('ParametrosCtrl',function ($scope,$location,$timeout,$stateParams,$state,Parametro) {
  console.log("Ingreso a ParamatrosCtrl");
  var parametro=$stateParams.parametroId;
  $scope.planilla2={};
  $scope.parametro1={};
  $scope.parametro2={};
  $scope.planilla2=Parametro.get({'parametroId': 1}, function(datos){
    $scope.parametro1=datos;
    $scope.fecha=datos.updated_at;
    $scope.grabar1 = function(tipo) {
      console.log("Ingreso a Actualizar");
      console.log(tipo);
      console.log($scope.parametro1.id);
      Parametro.update({parametroId: 1}, $scope.parametro1, function() {
          $timeout(function() {
            $scope.successTextAlert1 = "Parametros Guardados";
            $scope.showSuccessAlert1 = true;
            $scope.switchBool = function (value) {
              $scope[value] = !$scope[value];
            };
            if (tipo==1){
              $state.go('app.export.parametros',parametro);
            }
            else {
              $state.go('app.export.parametros',parametro2); 
            }
            //$location.path('/');
          });
      });
    };
  });  
  $scope.planilla2=Parametro.get({'parametroId': 2}, function(datos){
    $scope.parametro2=datos;
    $scope.fecha=datos.updated_at;
    $scope.grabar2 = function(tipo) {
      console.log("Ingreso a Actualizar");
      console.log(tipo);
      console.log($scope.parametro2.id);
      Parametro.update({parametroId: 2}, $scope.parametro2, function() {
          $timeout(function() {
            $scope.successTextAlert2 = "Parametros Guardados";
            $scope.showSuccessAlert2 = true;
            $scope.switchBool = function (value) {
              $scope[value] = !$scope[value];
            };
            if (tipo==2){
              $state.go('app.export.parametros',parametro);
            }
            else {
              $state.go('app.export.parametros',parametro2); 
            }
            //$location.path('/');
          });
      });
    };
  });
});

   app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', '$stateParams', 'mensaje', function($scope, $modalInstance, $stateParams, mensaje) {
    console.log('Ingreso a ModalInstanceCtrl');    
    $scope.mensaje = mensaje;
    $scope.ok = function () {
      $modalInstance.close($scope.mensaje);
    };
  }]);

  app.controller('ModalDemoCtrl', ['$scope', '$modal', '$log', '$state','$stateParams','Parametro', function($scope, $modal, $log, $state, $stateParams, Parametro) {
    console.log("Ingreso a ModalDemoCtrl");
    console.log('"========= Parametros Inicio======="');
    console.log($stateParams);
    console.log('"========= Parametros Fin======="');
    var valor=0;
    var planillaC = {};
    $scope.mensaje = 'Debe actualizar \"parametros';

    if ($stateParams.tipoPlanilla=='ZINC'){
      valor=1;
    }
    else {
      valor=2;
    };
    $scope.valor=valor;
    $scope.planillaC=Parametro.get({'parametroId': valor}, function(datos){
      $scope.parametro=datos;
      console.log("Ingreso a ModalDemoCtrl");
      console.log(valor);
      console.log($scope.parametro);

      if (($scope.parametro.cotizaciones==0)||($scope.parametro.cotizacionesAg==0)||
        ($scope.parametro.alicuotas==0)||($scope.parametro.alicuotasAg==0)){
        console.log("ingreso a PARAMETROS 2 == 0");
          var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg',
            resolve: {
              mensaje: function () {
                return $scope.mensaje + "2 " + $stateParams.tipoPlanilla + "\"";
              }
            }
          });

          modalInstance.result.then(function () {
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
          console.log('======= Scope de parametros ===============');
          console.log($scope.valor);
          console.log('======= Scope de parametros ===============');          
          $state.go('app.export.parametros2',{'parametroId':$scope.valor});
      };
      /*if (
        ($scope.parametro.humedad==0)||($scope.parametro.merma==0)||
        ($scope.parametro.leyes==0)||($scope.parametro.leyesAg==0)||
        ($scope.parametro.tipoCambioANB==0)||($scope.parametro.tipoCambioOficial==0)||
        ($scope.parametro.factorKg1==0)||($scope.parametro.factorKg2==0)||
        ($scope.parametro.externo==0)
        ){
        console.log("ingreso a PARAMETROS 1 == 0");
          var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg',
            resolve: {
              mensaje: function () {
                return $scope.mensaje + "1 " + $stateParams.tipoPlanilla + "\"";
              }
            }
          });

          modalInstance.result.then(function () {
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
          console.log('======= Scope de parametros ===============');
          console.log($scope.valor);
          console.log('======= Scope de parametros ===============');
          $state.go('app.export.parametros',{'parametroId':$scope.valor});
      };*/
      console.log("Salio");
    });
  }]);


app.controller('ListPaisCtrl',function ($scope,Paise,PuertoPais) {
  console.log("Ingreso a ListPaisCtrl");
  $scope.paise={};
  $scope.paise2={};
  $scope.puerto={};
  $scope.puerto2={};
  $scope.paise2=Paise.query(function(datos){
    $scope.paise=datos;
  });
  $scope.mostrar=function(item){
    $scope.puerto2=PuertoPais.get({'pais': item},function(datos){
      $scope.puertob=datos;
      console.log($scope.puertob);
    });
    console.log(item);
  }   
});

app.controller('ListPuertoCtrl',function ($scope,Puerto) {
  console.log("Ingreso a ListPuertoCtrl");
  $scope.puerto={};
  $scope.puerto2={};
  $scope.puerto2=Puerto.query(function(datos){
    $scope.puerto=datos;
  });
});

app.controller('PaisesNewCtrl',function ($scope,$location,$timeout,$stateParams,$state,Paise) {
    console.log("Ingreso a PaisesNewCtrl");
    $scope.paise={};
    $scope.paiseC={};
    $scope.grabar = function() {
      console.log("Antes de grabar Pais");
      Paise.save($scope.paise, function() {
        console.log("Ingreso a grabar Pais");
        $timeout(function() {
            $scope.successTextAlert = "Pais Guardado";
            $scope.showSuccessAlert = true;
            $scope.switchBool = function (value) {
              $scope[value] = !$scope[value];
            };      
            $state.go('app.export.paisesNew');    
        });
      });
    };
  });

app.controller('PaisesUpdateCtrl',function ($scope,$location,$timeout,$stateParams,$state,Paise) {
  console.log("Ingreso a PaisesUpdateCtrl");
  var paise=$stateParams.paiseId;
  console.log(paise);
  $scope.planilla2={};
  $scope.paise={};
  $scope.planilla2=Paise.get({'paiseId': paise}, function(datos){
    $scope.paise=datos;
    $scope.fecha=datos.updated_at;
    $scope.grabar = function() {
      console.log("Ingreso a Actualizar");
      console.log($scope.paise.id);
      Paise.update({paiseId: paise}, $scope.paise, function() {
          $timeout(function() {
            $scope.successTextAlert = "Pais Actualizado";
            $scope.showSuccessAlert = true;
            $scope.switchBool = function (value) {
              $scope[value] = !$scope[value];
            };
            $state.go('app.export.paisesUpdate');
            //$location.path('/');
          });
      });
    };
  });  
});

app.controller('PuertosNewCtrl',function ($scope,$location,$timeout,$stateParams,$state,Puerto,Paise) {
    console.log("Ingreso a PuertosNewCtrl");
    $scope.puerto={};
    $scope.puertoC={};
    $scope.paise={};
    $scope.paise2={};
    $scope.paise2=Paise.query(function(datos){
      $scope.paise=datos;
    });    
    $scope.grabar = function() {
      console.log("Antes de grabar Puertos");
      console.log($scope.puerto);
      Puerto.save($scope.puerto, function() {
        console.log("Ingreso a grabar Puerto");
        $timeout(function() {
            $scope.successTextAlert = "Puerto Guardado";
            $scope.showSuccessAlert = true;
            $scope.switchBool = function (value) {
              $scope[value] = !$scope[value];
            };      
            $state.go('app.export.listadoPuertos');    
        });
      });
    };
  });

app.controller('PuertosUpdateCtrl',function ($scope,$location,$timeout,$stateParams,$state,Puerto) {
  console.log("Ingreso a PuertosUpdateCtrl");
  var puerto=$stateParams.puertoId;
  console.log(puerto);
  $scope.planilla2={};
  $scope.puerto={};
  $scope.planilla2=Puerto.get({'puertoId': puerto}, function(datos){
    $scope.puerto=datos;
    $scope.fecha=datos.updated_at;
    $scope.grabar = function() {
      console.log("Ingreso a Actualizar");
      console.log($scope.puerto.id);
      Puerto.update({puertoId: puerto}, $scope.puerto, function() {
          $timeout(function() {
            $scope.successTextAlert = "Puerto Actualizado";
            $scope.showSuccessAlert = true;
            $scope.switchBool = function (value) {
              $scope[value] = !$scope[value];
            };
            $state.go('app.export.puertosUpdate');
            //$location.path('/');
          });
      });
    };
  });  
});

app.controller('ImprimirTodoCtrl', function ($scope,$stateParams){
    var planId=$stateParams.planId;
    console.log('Ingreso a ImprimirTodoCtrl!!!!!');
    $scope.imprimirPlan = function() {  
      $scope.url="http://mscfacturacion.minera.local:8080/birt/frameset?__report=reportes/plan_de_calculos.rptdesign&id=" + planId;
      window.open($scope.url);  
    };
    $scope.imprimirFactura = function() {  
      $scope.url="http://mscfacturacion.minera.local:8080/birt/frameset?__report=reportes/new_report.rptdesign&id=" + planId;
      window.open($scope.url);  
    };
    $scope.imprimirdue = function() {  
      $scope.url="http://mscfacturacion.minera.local:8080/birt/frameset?__report=reportes/due.rptdesign&id=" + planId;
      window.open($scope.url);  
    };
    $scope.imprimirLista = function() {  
      $scope.url="http://mscfacturacion.minera.local:8080/birt/frameset?__report=reportes/lista_de_empaque.rptdesign&id=" + planId;
      window.open($scope.url);  
    };
    $scope.imprimirRegalia = function() {  
      $scope.url="http://mscfacturacion.minera.local:8080/birt/frameset?__report=reportes/regalia_minera.rptdesign&id=" + planId;
      window.open($scope.url);  
    };
    $scope.imprimirM03 = function() {  
      $scope.url="http://mscfacturacion.minera.local:8080/birt/frameset?__report=reportes/m-03.rptdesign&id=" + planId;
      window.open($scope.url);  
    };    
});

app.controller('ctrl', function ($scope,Paise){
    console.log('Ingreso a ctrl!!!!!');
    $scope.itemList=[];
    //$scope.blisterPackTemplates=[{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"}]
    $scope.paise2={};
    $scope.paise2=Paise.query(function(datos){
      console.log('Ingreso a QUERY!!!!!');
      console.log(datos);
      $scope.blisterPackTemplates=datos;
      console.log($scope.blisterPackTemplates);
    });
        
    $scope.changedValue=function(item){
      $scope.itemList.push(item.descripcion);
    }    
});