module.exports = function(App) {
    "use strict";

    /**
     * @ngdoc controller
     * @name boilerplate.controller
     * @description
     * 
     */
    App.controller('widgetCtrl', ['$scope', '$rootScope', '$location', 'widgetSrv', function($scope, $rootScope, $location, widgetSrv) {
        
        $scope.data = widgetSrv.getName( $scope.endpoint );

        $scope.submit = function() {
            console.log ( "submit!", $scope.data );
            $location.path('/article/'+$scope.data);
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
