describe('Account', function() {
  it('can create a transaction, doing a deposit', function() {
    account = new Account;

    account.deposit(500)
    expect(account.transactions[0].credit).toEqual(500)
  })
  it('can withdraw', function() {
    account = new Account;

    account.deposit(500)
    account.withdraw(200)
    expect(account.transactions[1].debit).toEqual(200)
  })
  it("saves the date of each transaction", function () {
      const account = new Account

      account.deposit(500)
      expect(account.transactions[0].date).toEqual(jasmine.any(String));
  });

  // it('can print a statement', function() {
  //   const account = new Account

  //   account.deposit(500)
  //   expect(account.print()).toLog(`date || credit || debit || balance\n${account.transactions[0].date} ||  || 500.00 || 500.00`)
  // })
})

