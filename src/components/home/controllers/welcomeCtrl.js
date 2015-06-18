'use strict';

// WelcomeCtrl class
function WelcomeCtrl ($location) {
	this.$location = $location;
	this.firstname = "";
	this.lastname = "";
}

WelcomeCtrl.prototype.welcome = function() {
	alert('welcome ' + this.firstname + ' ' + this.lastname + ' !!!');
};

WelcomeCtrl.prototype.navigate = function () {
	this.$location.path('/');
};

module.exports = WelcomeCtrl;