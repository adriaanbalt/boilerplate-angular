(function () {
    "use strict";

    require('./vendor/angular');

    var App = angular.module('boilerplate', []);
    require('./widget/service')(App);
    require('./widget/controller')(App);
    require('./widget/directive')(App);

}());
