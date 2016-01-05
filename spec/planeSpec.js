describe('Plane', function () {

  var plane, airport;

  beforeEach(function () {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['landplane']);
  });

  describe('#isAirborne', function () {
    it('by default plane is airborne', function () {
      expect(plane.isAirborne).toBe(true);
    });
  });

  describe('#land', function () {
    it('leads to the plane no longer being airborne', function () {
      plane.land(airport);
      expect(plane.isAirborne).toBe(false);
    });

    it('returns plane', function () {
      expect(plane.land(airport)).toBe(plane)
    });

    it('lands the plane in an airport', function () {
      plane.land(airport);
      expect(airport.landplane).toHaveBeenCalledWith(plane);
    });
  });
});
