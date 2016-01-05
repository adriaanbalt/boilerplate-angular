module.exports = function(App) {
    "use strict";

    require('./article/controller')(App);
    require('./post/controller')(App);

    console.log ("router")
    App.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html'
            })
            .when('/article', {
                templateUrl: 'article.html'
            })
            .when('/article/:orderId', {
                templateUrl: 'post.html',
                controller: "postCtrl"
            })
        $locationProvider
            .html5Mode(false);
    });
};
