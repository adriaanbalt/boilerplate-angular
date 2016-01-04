module.exports = function(App) {
    "use strict";

    /**
     * @ngdoc directive
     * @name boilerplate.directive
     * @description
     * 
     */
    App.directive('article', [function() {
        return {
            restrict: "C",
            replace: false,
            controller: "articleCtrl",
            link: function($scope, elem, attrs) {
                console.log ( "article directive" );
            }
        }
    }]);

    return App;
};
