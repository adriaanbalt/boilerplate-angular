module.exports = function(App) {
    "use strict";

    /**
     * @ngdoc controller
     * @name boilerplate.controller
     * @description
     * 
     */
    App.controller('postCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        
        console.log ( 'postCtrl', $scope.endpoint );

    }]);

    return App;
};
