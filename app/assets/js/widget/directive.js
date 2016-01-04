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
            scope: {
                endpoint: "@endpoint"
            },
            templateUrl: "/assets/js/widget/template.html",
            controller: "widgetCtrl",
            link: function($scope, elem, attrs) {
                $scope.choice = "hi";
            }
        }
    }]);

    return App;
};
