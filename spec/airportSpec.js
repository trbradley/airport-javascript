describe('Airport', function () {

var airport;

beforeEach(function (){
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

});

});
