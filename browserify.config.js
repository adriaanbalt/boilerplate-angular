//third party libraries alias configurations for browserify

var vendorPath = "./app/assets/js/vendor/";

module.exports = [
    vendorPath + 'legacy.js:legacy',
    vendorPath + 'angular-1.4.8.js:angular',
    vendorPath + 'angular-route.js:angular-route',
    vendorPath + 'jquery.js:jquery'
];
