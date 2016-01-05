function Plane(isAirborne) {
  this.isAirborne = isAirborne || true;
}

// function UserException(message) {
//   this.message = message;
//   this.name = 'UserException';
// }

Plane.prototype.land = function (airport) {
  if (airport.isFull === true) throw new TypeError ('Airport Full');
  if (this.isAirborne === false) throw new TypeError ('Plane already landed');
  this.isAirborne = false;
  airport.landplane(this);
  return this;
};

Plane.prototype.takeOff = function (airport) {
  if (this.isAirborne === true) throw new TypeError ('Plane is already airborne');
  this.isAirborne = true;
  airport.takeOffPlane(this);
  return this;
};
