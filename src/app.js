'use strict';

// Imports
var angular = require('angular');
require('jquery');
require('angular-route');
require('winjs');
require('angular-winjs');

// Application routing and startup
var Router  = require('./router');
var StartUp = require('./startUp');

// Application modules
require('./components/home/home');

// Injection
var app = angular.module('app', [
	'winjs',
	'ngRoute',
	'app.home'
]);

app.config(['$routeProvider', Router]);
app.run(StartUp);