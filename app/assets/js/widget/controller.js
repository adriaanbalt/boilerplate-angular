module.exports = function(App) {
    "use strict";

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
