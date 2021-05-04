describe('Account', function() {
  let statement = new BankStatement;

  it('holds 0 pounds when initated', function() {
    expect(statement.balance()).toEqual(0)
  })
})