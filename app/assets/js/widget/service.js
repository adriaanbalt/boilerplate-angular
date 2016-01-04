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

        _service.getName = function( id ){
            console.log ( " service getname", id )

            // var sData = (!data)?null:$.param(data);
            // var config = {
            //     method: type,
            //     url: path,
            //     data: sData,
            //     headers: {
            //         'Authorization': 'Basic RDNzMTRrcTRCWA==',
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     },
            //     withCredentials: true
            // }

            // $http(config)
            //     .success(function() {
            //         rootScope.serviceQueue.pop('1');
            //         if(rootScope.serviceQueue.length < 1) {
            //             rootScope.callingApi = false;
            //         }
            //         if(successHandler) {
            //             successHandler(arguments[0], arguments[1]);
            //         }
            //         deferred.resolve(arguments);

            //     })
            //     .error(function(){
            //         rootScope.serviceQueue.pop('1');

            //         if(rootScope.serviceQueue.length < 1) {
            //             rootScope.callingApi = false;
            //         };
            //         if(errorHandler) {
            //             errorHandler(arguments[0], arguments[1]);
            //         } else {
            //             console.log('errorHandler not specified');
            //             rootScope.$broadcast(serviceConfig.constants.SERVER_EVENTS.nameNotResolvedError);
            //         }
            //         deferred.reject(arguments);
            //     });

            return id;
        }

        console.log ( "service", _service );

        return _service;
            
    }]);

    return App;
};
