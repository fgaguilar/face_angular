'use strict';

app.factory('Plancalculo', ['$resource',
  function($resource){
    return $resource('http://mscwsus.minera.local:8081/face_laravel/public/index.php/api/plancalculos/:planillaId', {}, {
      'get': {method:'GET', params:{planillaId:'@planillaId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);

app.factory('Plan', ['$resource',
  function($resource){
    return $resource('http://mscwsus.minera.local:8081/face_laravel/public/index.php/api/planillas/:planillaId', {}, {
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
    return $resource('http://mscwsus.minera.local:8081/face_laravel/public/index.php/api/dosificaciones/:dosificacionId', {}, {
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
    return $resource('http://mscwsus.minera.local:8081/face_laravel/public/index.php/api/facturas/:facturaId', {}, {
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
    return $resource('http://mscwsus.minera.local:8081/face_laravel/public/index.php/api/factura/:planillaId', {}, {
      'get': {method:'GET', params:{planillaId:'@planillaId'}, isArray:true}
    });
  }]);

app.factory('PlanTipo', ['$resource',
  function($resource){
    return $resource('http://mscwsus.minera.local:8081/face_laravel/public/index.php/api/planillasTipo/:tipoPlanilla', {}, {
      'get': {method:'GET', params:{tipoPlanilla:'@tipoPlanilla'}, isArray:true}
    });
  }]);

app.factory('Parametro', ['$resource',
  function($resource){
    return $resource('http://mscwsus.minera.local:8081/face_laravel/public/index.php/api/parametros/:parametroId', {}, {
      'get': {method:'GET', params:{parametroId:'@parametroId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);