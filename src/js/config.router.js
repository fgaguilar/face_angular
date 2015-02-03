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
                    }]
                  }
              })
              .state('app.dashboard-v2', {
                  url: '/dashboard-v2',
                  templateUrl: 'tpl/app_dashboard_v2.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
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
              .state('app.export.planillaZinc', {
                  url: '/planillaZinc',
                  templateUrl: 'tpl/form_planillaZinc.html',
                  controller: 'FormVacioCtrl'
              })                

/******************************************************************************/              
              .state('app.export.planillaZincUno', {
                  url: '/planillaZincUno/:planId',
                  controller: 'FormUnoCtrl',
                  templateUrl: 'tpl/form_planillaZinc.html'
              })  

/******************************************************************************/

              .state('app.export.planillaZincListado', {
                  url: '/planillaZinc',
                  controller: 'ListZincCtrl',
                  templateUrl: 'tpl/form_listado.html'
              })
              .state('app.export.planillaPlomoListado', {
                  url: '/planillaPlomo',
                  controller: 'ListPlomoCtrl',
                  templateUrl: 'tpl/form_listado.html'
              })              
              .state('app.export.listaEmpaque', {
                  url: '/listaEmpaque',
                  templateUrl: 'tpl/form_lista_empaque.html'
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
                  templateUrl: 'tpl/form_plan_calculo.html'
              })
              .state('app.taxation.pagoRegalias', {
                  url: '/pagoRegalias/:planId',
                  //controller: 'PlanCalculoCtrl',
                  templateUrl: 'tpl/form_regalia_minera.html'
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
                  templateUrl: 'tpl/form_factura.html'
              })          
      }
    ]
  );