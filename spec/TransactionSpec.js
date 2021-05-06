describe('Transaction', function() {
  const transaction = new Transaction(500, 200, '02/04/2020')

  it('Has credit', function() {
    expect(transaction.credit).toBeInstanceOf(Number)
  })
  it('Has debit', function() {
    expect(transaction.debit).toBeInstanceOf(Number)
  }) 
  it('Has a date', function() {
    expect(transaction.date).toBeInstanceOf(String)
  })
})
