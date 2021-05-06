describe("deposit", function () {
  it("allows a user to add a deposit, which is saved as credit in their bank transaction", function () {
    const transaction = new Transaction();

    transaction.deposit(1000);
    expect(transaction.credit).toEqual(1000);
  });
  it("allow a new transaction to change it's propperty", function () {
    const transaction = new Transaction();

    transaction.deposit(1000);
    transaction.deposit(500);
    expect(transaction.credit).toEqual(500);
  });
});

describe("withdraw", function () {
  it("allows a user to take money from their transaction", function () {
    const transaction = new Transaction();

    transaction.withdraw(1000);

    expect(transaction.debit).toEqual(1000);
  });

});

describe("date", function () {
  it("saves the date of each transaction", function () {
    const transaction = new Transaction(400, 0, '04/05/2004');

    expect(transaction.date).toEqual(jasmine.any(String));
  });
});
