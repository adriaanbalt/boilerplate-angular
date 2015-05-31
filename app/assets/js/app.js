"use strict";

angular.module('boilerplate')

/**
 * @ngdoc service
 * @name boilerplate.service
 * @description
 * 
 */
.factory('Service', ['$http', function($http) {

    var _service = {};

    return _service;
        
}])

/**
 * @ngdoc directive
 * @name boilerplate.directive
 * @description
 * 
 */
.directive('screen', [function() {
    return {
        restrict: 'ECA',
        replace: false,
        controller: "Controller",
        link: function($scope, elem, attrs) {
        }
    }
}])

/**
 * @ngdoc controller
 * @name boilerplate.controller
 * @description
 * 
 */
.controller('Controller', ['$scope', '$rootScope', 'Service', function($scope, $rootScope, Service) {
        
}]);
