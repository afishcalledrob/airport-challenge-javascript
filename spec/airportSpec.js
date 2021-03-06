describe('Airport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
  });


  it('has no planes by default', function(){
    expect(airport.planes).toEqual([]);
  });

  it('has a deafault capacity of 5', function(){
    expect(airport.capacity).toEqual(5);
  });

  describe('Land', function(){
    it('can store a landed plane in an array', function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });

    it('tells the plane to land', function(){
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it('wont let a plane land if the airport is full', function(){
      for (var i = 0; i < 5; i++) {
        airport.land(plane);
      }
      expect(function() {airport.land(plane)} ).toThrow("Airport full!");
    });

  });

  describe('Release', function(){
    it('can release a plane from the array', function(){
      airport.land(plane);
      airport.release(plane);
      expect(airport.planes).toEqual([]);

    });

    it('tells the plane to takeoff', function(){
      airport.land(plane);
      airport.release(plane);
      expect(plane.takeOff).toHaveBeenCalled();

    });

 });

});
