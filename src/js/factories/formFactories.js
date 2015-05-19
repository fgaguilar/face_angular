'use strict';

app.factory('Plan', ['$resource',
  function($resource){
    return $resource('/face_laravel/public/api/planillas/:planillaId', {}, {
      'get': {method:'GET', params:{planillaId:'@planillaId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);

app.factory('Dosificacion', ['$resource',
  function($resource){
    return $resource('/face_laravel/public/api/dosificaciones/:dosificacionId', {}, {
      'get': {method:'GET', params:{dosificacionId:'@dosificacionId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);

app.factory('Factura', ['$resource',
  function($resource){
    return $resource('/face_laravel/public/api/facturas/:facturaId', {}, {
      'get': {method:'GET', params:{facturaId:'@facturaId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);

app.factory('Facturac', ['$resource',
  function($resource){
    return $resource('/face_laravel/public/api/factura/:planillaId', {}, {
      'get': {method:'GET', params:{planillaId:'@planillaId'}, isArray:true}
    });
  }]);

app.factory('PlanTipo', ['$resource',
  function($resource){
    return $resource('/face_laravel/public/api/planillasTipo/:tipoPlanilla', {}, {
      'get': {method:'GET', params:{tipoPlanilla:'@tipoPlanilla'}, isArray:true}
    });
  }]);

app.factory('Parametro', ['$resource',
  function($resource){
    return $resource('/face_laravel/public/api/parametros/:parametroId', {}, {
      'get': {method:'GET', params:{parametroId:'@parametroId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);