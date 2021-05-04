describe('balance', function() {
  let statement = new BankStatement;

  it('is an empty array when initiated', function() {
    expect(statement.balance).toEqual([])
  })
  it('updates when credit is added to the account', function() {
    statement.deposit(1000)
    expect(statement.balance).toEqual([1000])
  })
})

describe('debit', function() {
  let statement = new BankStatement;

  it('is an empty array when initiated', function() {
    expect(statement.debit).toEqual([])
  })
})

describe('credit', function() {
  let statement = new BankStatement;

  it('is an empty array when initiated', function() {
    expect(statement.credit).toEqual([])
  })
})

describe('deposit', function() {
  let statement = new BankStatement;

  it('allows a user to add a deposit, which is saved as credit in their bank account', function() {
    statement.deposit(1000)
    expect(statement.credit).toEqual([1000])
  })
  it('allows more than one statement, with different amounts, to be added to a bank account', function() {
    statement.deposit(500)
    expect(statement.credit).toEqual([1000, 500])
  })
})