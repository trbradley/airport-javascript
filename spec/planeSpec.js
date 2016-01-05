describe('Plane', function () {

  var plane, airport;

  beforeEach(function () {
    plane = new Plane();
    // airport = new Airport();
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

    it('lands the plane in an airport', function () {
      airport = jasmine.createSpyObj('airport', ['landplane']);
      // spyOn(airport, 'landplane');
      plane.land(airport);
      expect(airport.landplane).toHaveBeenCalledWith(plane);
    });
  });

});
