describe('Weather', function () {

  var weather;

  beforeEach (function () {
    weather = new Weather();
  });

  describe('#isStormy', function () {

    it('can be stormy', function () {
      spyOn(weather, '_numberGenerator').and.returnValue(0);
      expect(weather.isStormy()).toBe(true);
    });

    it('can not be stormy', function () {
      spyOn(weather, '_numberGenerator').and.returnValue(3);
      expect(weather.isStormy()).toBe(false);
    });
  });

});
