describe('BankStatement', function() {
  let statement = new BankStatement;

  it('be an instance of a new account', function() {
    expect(statement).toBeInstanceOf(Account)
  })

  it('can call functions as stated in the Account class', function() {
    statement.deposit(1000)
    expect(statement.balance).toEqual([1000])
  })
})