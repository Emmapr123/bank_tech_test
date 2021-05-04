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

describe('print statement', function() {
  let statement = new BankStatement;

  it('can print a statement with a single deposit', function() {
    statement.deposit(500)

    expect(statement.print()).toEqual(`date || credit || debit || balance\n${statement.date} || 500.00 || 0.00 || 500.00`)
  })
})