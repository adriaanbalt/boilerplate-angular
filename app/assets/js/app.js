(function () {
    "use strict";

    require('angular');
	require('angular-route');

    // TODO load the JSON file

    var App = angular.module('boilerplate', [ 'ngRoute' ]);
	
	require('./routes')(App);
    require('./article/controller')(App);
    require('./article/directive')(App);

    require('./widget/service')(App);
    require('./widget/controller')(App);
    require('./widget/directive')(App);

}());
