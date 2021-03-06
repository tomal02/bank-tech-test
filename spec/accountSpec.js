describe('Bank account', function () {
  beforeEach(function () {
    account = new BankAccount();
  });
  it('is created with an initial balance of 0', function () {
    expect(account.balance).toBe(0);
  });
  it('can be deposited into', function () {
    account.deposit(10);
    expect(account.balance).toBe(10);
  });
  it('can be withdrawn from', function () {
    account.deposit(6);
    account.withdraw(5);
    expect(account.balance).toBe(1);
  });
  describe('stores transaction', function () {
    it('records date of transaction in array', function () {
      //account.deposit(5);
      //expect
    });
  });
});
