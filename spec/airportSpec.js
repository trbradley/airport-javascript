describe('Airport', function () {

  var airport, plane;

  beforeEach(function () {
    airport = new Airport();
  });

  describe('#stored_planes', function () {

    it('is an empty array by default', function () {
      expect(airport.stored_planes).toEqual([]);
    });
  });

  describe('#capacity', function () {

    it('has a default value', function () {
      expect(airport.capacity).toEqual(Airport.DEFAULTCAPACITY);
    });

    it('can be overridden on exercise', function () {
      var random_capacity = 100;
      airport = new Airport(random_capacity);
      expect(airport.capacity).toEqual(random_capacity);
    });
  });

  describe('#isFull', function () {

    it('returns true when airport full', function () {
      airport = new Airport(1, [plane]);
      expect(airport.isFull()).toBe(true);
    });

    it('returns false when airport is not full', function () {
      expect(airport.isFull()).toBe(false);
    });
  });

  describe('#landplane', function () {

    it('stores the plane in the airport', function () {
      airport.landplane(plane);
      expect(airport.stored_planes).toContain(plane);
    });
  });

  describe('#takeOffPlane', function () {

    it('causes plane to leave the airport', function () {
      airport.takeOffPlane(plane);
      expect(airport.stored_planes).not.toContain(plane);
    });
  });

});
