describe('Bank account', function () {
  beforeEach(function () {
    account = new bankAccount();
  });
  it('is created with an initial balance of 0', function () {
    expect(account.balance).toBe(0);
  });
});
