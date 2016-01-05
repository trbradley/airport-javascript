function Plane(isAirborne) {
  this.isAirborne = isAirborne || true;
}

Plane.prototype.land = function (airport) {
  this.isAirborne = false;
  airport.landplane(this);
};
