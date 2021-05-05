describe("balance", function () {
  const statement = new Account();

  it("is an empty array when initiated", function () {
    expect(statement.balance).toEqual([]);
  });
  it("updates when credit is added to the account", function () {
    statement.deposit(1000);
    expect(statement.balance).toEqual([1000.0]);

    statement.deposit(500);
    expect(statement.balance).toEqual([1000.0, 1500.0]);
  });
  it("All of the arrays have the same lenght", function () {
    statement.withdraw(500);

    expect(statement.balance.length).toEqual(statement.debit.length);
    expect(statement.debit.length).toEqual(statement.credit.length);
  });
});

describe("debit", function () {
  const statement = new Account();

  it("is an empty array when initiated", function () {
    expect(statement.debit).toEqual([]);
  });
});

describe("credit", function () {
  const statement = new Account();

  it("is an empty array when initiated", function () {
    expect(statement.credit).toEqual([]);
  });
});

describe("deposit", function () {
  const statement = new Account();

  it("allows a user to add a deposit, which is saved as credit in their bank account", function () {
    statement.deposit(1000);
    expect(statement.credit).toEqual([1000.0]);
  });
  it("allows more than one statement, with different amounts, to be added to a bank account", function () {
    statement.deposit(500);
    expect(statement.credit).toEqual([1000.0, 500.0]);
  });
});

describe("withdraw", function () {
  const statement = new Account();

  it("allows a user to take money from their account", function () {
    statement.deposit(1000);
    statement.withdraw(1000);

    expect(statement.debit).toEqual([0, 1000.0]);
    expect(statement.balance).toEqual([1000.0, 0]);
  });

  it('does not allow to overwrite the credit', function() {
    expect(function() { statement.withdraw(500) } ).toThrow('Insufficient funds')
  })
});

describe("date", function () {
  const statement = new Account();

  it("is an empty array when initiated", function () {
    expect(statement.date).toEqual([]);
  });

  it("saves the date of each transaction", function () {
    statement.deposit(1000);

    expect(statement.date[0]).toEqual(jasmine.any(String));
  });
});
