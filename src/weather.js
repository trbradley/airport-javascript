'use strict';

function Weather() {}

Weather.prototype._numberGenerator = function () {
  return Math.floor(Math.random() * 4);
};

Weather.prototype._weather = function () {
  var weather_possibilities = ['storm', 'no_storm', 'no_storm', 'no_storm'];
  return weather_possibilities[this._numberGenerator()];
};

Weather.prototype.isStormy = function () {
  return this._weather() == 'storm';
};
