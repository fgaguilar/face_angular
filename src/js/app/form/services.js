var planillaServices = angular.module('planillaServices', ['ngResource']);

planillaServices.factory('Planilla', ['$resource',
  function($resource){
    return $resource('api/planillas/:planillaId', {}, {
      'get': {method:'GET', params:{nodeId:'@planillaId'}, isArray:false},
      'save': {method:'POST'},
      'query': {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);
