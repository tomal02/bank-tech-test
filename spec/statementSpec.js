describe('Account statement', function () {
  beforeEach(function () {
    statement = new Statement();
  });
  it('can outputs the correct headers', function () {
    Statement._outputHeader();
    expect(console.log).toHaveBeenCalledWith('DATE | AMOUNT | BALANCE');
  });
});
