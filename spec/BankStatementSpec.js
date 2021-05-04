describe('BankStatement', function() {
  let statement = new BankStatement;

  it('be an instance of a new account', function() {
    expect(statement).toBeInstanceOf(Account)
  })
})