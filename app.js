//Invocar modo JavaScript 'strict'

'use strict';
//Crear el controller 'ticket'
var miApp = angular.module('miApp',[]);

miApp.controller("Ctrl", function($scope) {
		var datos ;
      	 $scope.datos= {"id": 123, "city":"San Jose", "country":"CR", "continent":"America Central" },
      	 				  {"id": 231, "city":"Londo", "country":"IG", "continent":"Europa" },
      	 				  {"id": 321, "city":"Heredia", "country":"CR", "continent":"America Central" },
      	 				  {"id": 213, "city":"Paris", "country":"FR", "continent":"Europa" },
      	 				  {"id": 222, "city":"Bangober", "country":"CA", "continent":"America Norte" };      

});