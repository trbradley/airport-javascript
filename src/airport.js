function Airport (stored_planes, capacity) {
  this.stored_planes = stored_planes || [];
  this.capacity = capacity || Airport.DEFAULTCAPACITY;
}

Object.defineProperty(Airport, 'DEFAULTCAPACITY', {value: 20});
