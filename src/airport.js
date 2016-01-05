function Airport (capacity, stored_planes) {
  this.stored_planes = stored_planes || [];
  this.capacity = capacity || Airport.DEFAULTCAPACITY;
}

Object.defineProperty(Airport, 'DEFAULTCAPACITY', {value: 20});

Airport.prototype.isFull = function () {
  if (this.stored_planes.length === this.capacity) {
    return true;
  }
  return false;
};

Airport.prototype.landplane = function (plane) {
  this.stored_planes.push(plane);
};

Airport.prototype.takeOffPlane = function (plane) {
  this.stored_planes.pop(plane);
};
