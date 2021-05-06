describe("balance", function () {
  it("is an empty array when initiated", function () {
    const account = new Account();

    expect(account.balance).toEqual([]);
  });
  it("updates when credit is added to the account", function () {
    const account = new Account();

    account.deposit(1000);
    expect(account.balance).toEqual([1000.0]);

    account.deposit(500);
    expect(account.balance).toEqual([1000.0, 1500.0]);
  });
  it("All of the arrays have the same lenght", function () {
    const account = new Account();

    account.withdraw(500);
    expect(account.balance.length).toEqual(account.debit.length);
    expect(account.debit.length).toEqual(account.credit.length);
  });
});

describe("debit", function () {
  const account = new Account();

  it("is an empty array when initiated", function () {
    expect(account.debit).toEqual([]);
  });
});

describe("credit", function () {
  const account = new Account();

  it("is an empty array when initiated", function () {
    expect(account.credit).toEqual([]);
  });
});

describe("deposit", function () {
  it("allows a user to add a deposit, which is saved as credit in their bank account", function () {
    const account = new Account();

    account.deposit(1000);
    expect(account.credit).toEqual([1000.0]);
  });
  it("allows more than one transaction, with different amounts, to be added to a bank account", function () {
    const account = new Account();

    account.deposit(1000);
    account.deposit(500);
    expect(account.credit).toEqual([1000.0, 500.0]);
  });
});

describe("withdraw", function () {
  it("allows a user to take money from their account", function () {
    const account = new Account();

    account.deposit(1000);
    account.withdraw(1000);

    expect(account.debit).toEqual([0, 1000.0]);
    expect(account.balance).toEqual([1000.0, 0]);
  });

  it('does not allow to overwrite the credit', function() {
    const account = new Account();

    account.deposit(100)
    expect(function() { account.withdraw(500) } ).toThrow('Insufficient funds')
  })
});

describe("date", function () {
  it("is an empty array when initiated", function () {
    const account = new Account();

    expect(account.date).toEqual([]);
  });

  it("saves the date of each transaction", function () {
    const account = new Account();

    
    account.deposit(1000);

    expect(account.date[0]).toEqual(jasmine.any(String));
  });
});
