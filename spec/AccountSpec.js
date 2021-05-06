describe('Account', function() {
  it('can create a transaction, doing a deposit', function() {
    account = new Account;

    account.deposit(500)
    expect(account.transactions[0].debit).toEqual(500)
  })
})