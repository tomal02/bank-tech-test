describe('Account statement', function () {
  beforeEach(function () {
    statement = new Statement();
    console.log = jasmine.createSpy('log');
    const mockDeposit = [['28/10/21', 'deposit', 10, 40]]; // Mock input date, transaction type, amount in/out and balance
  });
  it('can outputs the correct headers', function () {
    statement._outputHeader();
    expect(console.log).toHaveBeenCalledWith(
      'DATE | TYPE | AMOUNT | BALANCE\n'
    );
  });
  it('can output a deposit properly', function () {
    statement.getStatement(mockDeposit);
    expect(console.log).toHaveBeenCalledWith(
      'DATE | TYPE | AMOUNT | BALANCE\n28/10/21 | +£10 | £40'
    );
  });
});
