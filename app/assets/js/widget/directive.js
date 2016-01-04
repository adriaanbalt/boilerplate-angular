module.exports = function(App) {
    "use strict";

    /**
     * @ngdoc directive
     * @name boilerplate.directive
     * @description
     * 
     */
    App.directive('widgetTest', [function() {
        return {
            restrict: "C",
            replace: false,
            templateUrl: "/assets/js/widget/widget.html",
            controller: "widgetCtrl",
            link: function($scope, elem, attrs) {
                console.log ( "directive" );
                $scope.choice = "hi";
            }
        }
    }]);

    return App;
};
