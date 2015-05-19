'use strict';

/**
 * Config for the router
 */

angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/app/dashboard-v1');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'tpl/app_dashboard_v1.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }],
                    //loggedin: checkLoggedin
                  }
              })
              .state('app.dashboard-v2', {
                  url: '/dashboard-v2',
                  templateUrl: 'tpl/app_dashboard_v2.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }],
                    //loggedin: checkLoggedin
                  }
              })
              // export
              .state('app.export', {
                  url: '/export',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('js/controllers/form.js');
                      }]
                  }
              })
              .state('app.export.parametros', {
                  //url: '/parametros/:parametroId',
                  url: '/parametros',
                  params: {'parametroId':null},
                  controller: 'ParametrosCtrl',
                  templateUrl: 'tpl/form_parametros.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              }) 
              .state('app.export.parametros2', {
                  url: '/parametros2',
                  params: {'parametroId':null},
                  controller: 'ParametrosCtrl',
                  templateUrl: 'tpl/form_parametros2.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              })                              
              .state('app.export.planillaZinc', {
                  url: '/planillaZinc/:tipoPlanilla',
                  templateUrl: 'tpl/form_planillaZinc.html',
                  controller: 'FormVacioCtrl',
                  resolve: {
                    //loggedin: checkLoggedin
                  }
              })
              .state('app.export.planillaZincUno', {
                  url: '/planillaZincUno/:tipoPlanilla/:planId',
                  controller: 'FormUnoCtrl',
                  templateUrl: 'tpl/form_planillaZinc.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              })
              .state('app.export.planillaZincListadoGeneral', {
                  url: '/planillaZincListado',
                  controller: 'ListZincCtrlGral',
                  templateUrl: 'tpl/form_listado.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              })
              .state('app.export.planillaZincListado', {
                  url: '/planillaZincListado/:tipoPlanilla',
                  controller: 'ListZincCtrl',
                  templateUrl: 'tpl/form_listado.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              })
              .state('app.export.planillaPlomoListado', {
                  url: '/planillaPlomoListado/:tipoPlanilla',
                  controller: 'ListPlomoCtrl',
                  templateUrl: 'tpl/form_listado.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              })              
              .state('app.export.listaEmpaque', {
                  url: '/listaEmpaque/:planId',
                  controller: 'listaEmpaqueCtrl',
                  templateUrl: 'tpl/form_lista_empaque.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              })             
              // taxation
              .state('app.taxation', {
                  url: '/export',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('js/controllers/form.js');
                      }]
                  }
              })
              .state('app.taxation.verificacionCalculo', {
                  url: '/verificacionCalculo/:planId',
                  controller: 'PlanCalculoCtrl',
                  templateUrl: 'tpl/form_plan_calculo.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              })
              .state('app.taxation.pagoRegalias', {
                  url: '/pagoRegalias/:planId',
                  controller: 'RegaliaMineraCtrl',
                  templateUrl: 'tpl/form_regalia_minera.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              })
              // billing
              .state('app.billing', {
                  url: '/billing',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('js/controllers/form.js');
                      }]
                  }
              })
              .state('app.billing.facturaExportacion', {
                  url: '/facturaExportacion/:planId',
                  controller: 'FacturaExportacionCtrl',
                  templateUrl: 'tpl/form_factura.html',
                  //resolve: {
                    //loggedin: checkLoggedin
                  //}
              })     
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'tpl/page_signin.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signin.js'] );
                      }]
                  }
              })
              .state('access.signup', {
                  url: '/signup',
                  templateUrl: 'tpl/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signup.js'] );
                      }]
                  }
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'tpl/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'tpl/page_404.html'
              })                  
      }
    ]
  );

var checkLoggedin = function($q, $state, $timeout, $http, $location, $rootScope, $cookies){
  console.log('Ingreso a checkLoggedin');
  var deferred = $q.defer();

  $http.get('http://mscwsus.minera.local:3000/loggedin').success(function(user){
    console.log('Luego de loggedin');
    console.log("USER: "+user);
    if (!$cookies.fName){
      console.log('Ingreso por cookies nulos');
      $state.go('access.signin');
      $http.post('http://mscwsus.minera.local:3000/logout')
      .success(function(){
        delete $cookies["fName"];
        delete $cookies["lName"];
        delete $cookies["uName"];
        console.log('============ remove cookies ==============');
        console.log($cookies.uName);
        console.log($cookies.fName);
        console.log($cookies.lName);
      });
    };
    $rootScope.errorMessage = null;
    // User is Authenticated
    if (user != '0')
    {
      $rootScope.currentUser = user;
      deferred.resolve();
    }
    // User is not Authenticated
    else {
      $rootScope.errorMessage = 'You need to login in';
      deferred.reject();
      $location.url('/login');
    }
  }).error(function(data, status, headers, config) {
    console.log('Error en Autenticacion');
  });
  console.log("Salio de checkLoggedin");
  return deferred.promise;
}