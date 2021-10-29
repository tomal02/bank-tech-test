describe('Account statement', function () {
  beforeEach(function () {
    statement = new Statement();
    console.log = jasmine.createSpy('log');
  });
  it('can outputs the correct headers', function () {
    statement._outputHeader();
    expect(console.log).toHaveBeenCalledWith(
      'DATE | TYPE | AMOUNT | BALANCE\n'
    );
  });
  it('can output a deposit properly', function () {
    const mockDeposit = [['28/10/21', 'deposit', 10, 40]]; // Mock input date, transaction type, amount in/out and balance
    statement.getStatement(mockDeposit);
    expect(console.log).toHaveBeenCalledWith(
      'DATE | TYPE | AMOUNT | BALANCE\n'
    );
    expect(console.log).toHaveBeenCalledWith('28/10/21 | deposit | 10 | 40');
  });
});
