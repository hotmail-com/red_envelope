var envelopeApp = angular.module('envelopeApp', [
	'ngRoute',
	'envelopeControllers'
]);

envelopeApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/grab', {
		templateUrl: 'partials/grab.html',
		controller: 'GrabCtrl'
	}).when('/share', {
		templateUrl: 'partials/share.html',
		controller: 'ShareCtrl'
	}).when('/grabSuccess', {
		templateUrl: 'partials/grabSuccess.html',
		controller: 'GrabSuccessCtrl'
	}).otherwise({ redirectTo: '/index' })
}])