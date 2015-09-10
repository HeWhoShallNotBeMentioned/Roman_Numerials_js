describe('#romanNumerals', function() {
  it("returns III if 3 is entered", function() {
    expect(romanNumerals(3)).to.equal("III")
  });
  it("returns V if 5 is entered", function() {
    expect(romanNumerals(5)).to.equal("V")
  });
  it("returns VIII if 8 is entered", function() {
    expect(romanNumerals(8)).to.equal("VIII")
  });
  it("returns XIII if 13 is entered", function() {
    expect(romanNumerals(13)).to.equal("XIII")
  });
  it("returns XX if 20 is entered", function() {
    expect(romanNumerals(20)).to.equal("XX")
  });
  it("returns XXXV if 35 is entered", function() {
    expect(romanNumerals(35)).to.equal("XXXV")
  });
  it("returns LV if 55 is entered", function() {
    expect(romanNumerals(55)).to.equal("LV")
  });
  it("returns C if 100 is entered", function() {
    expect(romanNumerals(100)).to.equal("C")
  });
  it("returns CVIII if 108 is entered", function() {
    expect(romanNumerals(108)).to.equal("CVIII")
  });
  it("returns D if 500 is entered", function() {
    expect(romanNumerals(500)).to.equal("D")
  });
  it("returns MDCLXVI if 1666 is entered", function() {
    expect(romanNumerals(1666)).to.equal("MDCLXVI")
  });

  it("returns MMMDCCCXXXVII if 3837 is entered", function() {
    expect(romanNumerals(3837)).to.equal("MMMDCCCXXXVII")
  })
  it('returns false for numbers greater than 4000', function() {
    expect(romanNumerals(4001)).to.equal(false)
  });
  it('returns IV if 4 is entered', function() {
    expect(romanNumerals(4)).to.equal("IV");
  });
  it('returns IX if 9 is entered', function() {
    expect(romanNumerals(9)).to.equal("IX");
  });
  it('returns MMMCM if 3900 is entered', function() {
    expect(romanNumerals(3900)).to.equal("MMMCM");
  });

  it('returns CDXLIV if 444 is entered', function() {
    expect(romanNumerals(444)).to.equal("CDXLIV");
  });

  it('returns MMMCMXCIX if 3999 is entered', function() {
    expect(romanNumerals(3999)).to.equal("MMMCMXCIX");
  });
});
