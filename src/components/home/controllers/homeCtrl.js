'use strict';

// HomeCtrl class
function HomeCtrl ($location) {
	this.$location = $location;
}

HomeCtrl.prototype.navigate = function () {
	this.$location.path('/welcome');
};

module.exports = HomeCtrl;