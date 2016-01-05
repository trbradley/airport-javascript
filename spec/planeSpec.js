describe('Plane', function () {

  var plane, airport, weather;

  beforeEach(function () {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['landplane', 'isFull', 'takeOffPlane']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  describe('#isAirborne', function () {
    it('by default plane is airborne', function () {
      expect(plane.isAirborne).toBe(true);
    });
  });

  describe('not stormy', function () {

    beforeEach(function () {
      weather.isStormy = false;
    });

    describe('#land', function () {
      it('leads to the plane no longer being airborne', function () {
        plane.land(airport);
        expect(plane.isAirborne).toBe(false);
      });

      it('returns plane', function () {
        expect(plane.land(airport)).toBe(plane);
      });

      it('lands the plane in an airport', function () {
        plane.land(airport);
        expect(airport.landplane).toHaveBeenCalledWith(plane);
      });

      it('is prevented when airport is full', function () {
        airport.isFull = true;
        expect(function () {plane.land(airport);}).toThrowError(TypeError, 'Airport Full');
      });

      it('is prevented when plane already landed', function () {
        plane.land(airport);
        expect(function () {plane.land(airport);}).toThrowError(TypeError, 'Plane already landed');
      });
    });

    describe('#takeOff', function () {
      beforeEach(function () {
        spyOn(plane, 'isAirborne').and.returnValue(false);
      });

      it('leads to the plane being airborne', function () {
        plane.takeOff(airport);
        expect(plane.isAirborne).toBe(true);
      });

      it('causes takeOffPlane to be called on airport', function () {
        plane.takeOff(airport);
        expect(airport.takeOffPlane).toHaveBeenCalledWith(plane);
      });

      it('returns a plane', function () {
        expect(plane.takeOff(airport)).toBe(plane);
      });

      it('is prevented when the plane is already airborne', function () {
        plane = new Plane();
        expect(function () {plane.takeOff(airport);}).toThrowError(TypeError, 'Plane is already airborne');
      });
    });
  });

  describe('stormy', function () {

    beforeEach(function () {
      weather.isStormy = true;
    });

    describe('#land', function () {
      it('is prevented when the weather is stormy', function () {
        expect(function () {plane.land(airport, weather);}).toThrowError(TypeError, 'Weather is stormy');
      });
    });

    describe('#takeOff', function () {
      it('is prevented when the weather is stormy', function () {
        expect(function () {plane.land(airport, weather);}).toThrowError(TypeError, 'Weather is stormy');
      });
    });
  });
});
