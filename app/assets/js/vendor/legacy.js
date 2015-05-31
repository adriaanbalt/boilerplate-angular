// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    var styles = {
        ie10: [
            'msTouchAction',
            'msWrapFlow',
            'msWrapMargin',
            'msWrapThrough',
            'msOverflowStyle',
            'msScrollChaining',
            'msScrollLimit',
            'msScrollLimitXMin',
            'msScrollLimitYMin',
            'msScrollLimitXMax',
            'msScrollLimitYMax',
            'msScrollRails',
            'msScrollSnapPointsX',
            'msScrollSnapPointsY',
            'msScrollSnapType',
            'msScrollSnapX',
            'msScrollSnapY',
            'msScrollTranslation',
            'msFlexbox',
            'msFlex',
            'msFlexOrder'
        ],
        ie11: [
            'msTextCombineHorizontal'
        ]
    }


    var ieVersion = null,
        property;

    for (var i = 0; i < styles.ie10.length; i++) {
        property = styles.ie10[i];

        if (document.body.style[property] != undefined) {
            ieVersion = " ie10";
        }
    }

    for (var i = 0; i < styles.ie11.length; i++) {
        property = styles.ie11[i];

        if (document.body.style[property] != undefined) {
            ieVersion = " ie11";
        }
    }

    if (ieVersion) {
        document.documentElement.className += ieVersion;
    }
}());
