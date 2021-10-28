describe('Account statement', function () {
  beforeEach(function () {
    statement = new Statement();
    console.log = jasmine.createSpy('log');
  });
  it('can outputs the correct headers', function () {
    statement._outputHeader();
    expect(console.log).toHaveBeenCalledWith('DATE | AMOUNT | BALANCE');
  });
});
