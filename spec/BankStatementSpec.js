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