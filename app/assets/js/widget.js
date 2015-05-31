module.exports = function(App) {
    "use strict";

    /**
     * @ngdoc service
     * @name boilerplate.service
     * @description
     * 
     */
    App.factory('widgetSrv', ['$http', function($http) {

        var _service = {};

        console.log ( "service" );

        return _service;
            
    }]);

    /**
     * @ngdoc directive
     * @name boilerplate.directive
     * @description
     * 
     */
    App.directive('widget', [function() {
        return {
            restrict: "C",
            replace: false,
            template: "",
            controller: "widgetCtrl",
            link: function($scope, elem, attrs) {
                console.log ( "directive" );
                $scope.choice = "hi";
            }
        }
    }]);

    /**
     * @ngdoc controller
     * @name boilerplate.controller
     * @description
     * 
     */
    App.controller('widgetCtrl', ['$scope', '$rootScope', 'widgetSrv', function($scope, $rootScope, widgetSrv) {

        $scope.submit = function() {
            console.log ( "submit!" );
        };

        $scope.click = function($event) {
            console.log ( "click!", $event );
        }

        $scope.keyUp = function($event) {
            console.log ( "keyPress!", $event.keyCode, $scope.fieldValue );
        };

    }]);

    return App;
};
