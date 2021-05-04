describe('Account', function() {
  let statement = new BankStatement;

  it('holds 0 pounds when initiated', function() {
    expect(statement.balance()).toEqual(0)
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
})