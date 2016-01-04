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

    return App;
};
