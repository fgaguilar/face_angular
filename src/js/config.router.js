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
              .state('app.export.parametros', {
                  url: '/parametros/:parametroId',
                  controller: 'ParametrosCtrl',
                  templateUrl: 'tpl/form_parametros.html'

              })                
              .state('app.export.planillaZinc', {
                  url: '/planillaZinc/:tipoPlanilla',
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

              .state('app.export.planillaZincListadoGeneral', {
                  url: '/planillaZincListado',
                  controller: 'ListZincCtrlGral',
                  templateUrl: 'tpl/form_listado.html'
              })
              .state('app.export.planillaZincListado', {
                  url: '/planillaZincListado/:tipoPlanilla',
                  controller: 'ListZincCtrl',
                  templateUrl: 'tpl/form_listado.html'
              })
              .state('app.export.planillaPlomoListado', {
                  url: '/planillaPlomoListado/:tipoPlanilla',
                  controller: 'ListPlomoCtrl',
                  templateUrl: 'tpl/form_listado.html'
              })              
              .state('app.export.listaEmpaque', {
                  url: '/listaEmpaque/:planId',
                  controller: 'listaEmpaqueCtrl',
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