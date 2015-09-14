/// <reference path='../../../typings/tsd.d.ts' />

namespace OpenCorporaUA.Base.App {
    const app: angular.IModule = angular.module('OpenCorporaUA.Base.App', [
        'ngAnimate',
        'ngAria',
        'ngResource',
        'ngMaterial',
        'ngMessages',
    ]);



    app.config(['$interpolateProvider', $interpolateProvider => {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]);



    app.config(['$mdThemingProvider', $mdThemingProvider => {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue');


        $mdThemingProvider
            .theme('dark')
            .primaryPalette('blue-grey');
    }]);
}