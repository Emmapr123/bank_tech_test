describe("BankStatement", function () {
  const statement = new BankStatement();

  it("be an instance of a new account", function () {
    expect(statement).toEqual(jasmine.any(Account));
  });

  it("can call functions as stated in the Account class", function () {
    statement.deposit(1000);
    expect(statement.balance).toEqual([1000]);
  });
});

describe("print statement", function () {
  const statement = new BankStatement();

  it("can print a statement with a single deposit", function () {
    statement.deposit(500);

    expect(statement.print()).toEqual(
      "date || credit || debit || balance\n" + statement.date + " || 500.00 || 0.00 || 500.00"
    );
  });
});

describe("statement with deposit and withdraw", function () {
  const statement = new BankStatement();

  it("can print a statement with a deposit and a withdraw", function () {
    statement.deposit(500);
    statement.withdraw(200);

    expect(statement.print()).toEqual(
      'date || credit || debit || balance\n'+ statement.date[0] + " || 500.00 || 0.00 || 500.00\n" + statement.date[1] + " || 0.00 || 200.00 || 300.00"
    );
  });
});
