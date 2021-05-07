describe('Account', function() {
  it('can create a transaction, doing a deposit', function() {
    const account = new Account();

    account.deposit(500)
    expect(account.transactions[0]).toBeInstanceOf(Transaction)
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
  })
  // it('print', function() {
  //   const account = new Account
  //   const statement = new BankStatement

  //   spyOn(statement, 'print')
  //   account.print()

  //   expect(statement.print).toHaveBeenCalledTimes(1)

  // })
})

