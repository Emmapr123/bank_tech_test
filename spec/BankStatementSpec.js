describe("BankStatement", function () {
  const statement = new BankStatement([new Transaction(1000, 0, '02/02/1998')]);

  it("be an instance of a new account", function () {
    expect(statement.transaction).toBeInstanceOf(Array);
  });

  it("can call functions as stated in the Account class", function () {
    expect(statement.transaction[0].debit).toEqual(1000);
  });
});

// describe("print statement", function () {
//   const statement = new BankStatement([new Transaction(0, 500, '06/05/2021')]);

//   it("can print a statement with a single deposit", function () {

//     expect(statement.print()).toEqual(
//       "date || credit || debit || balance\n06/05/2021 || 500.00 ||  || 500.00"
//     );
//   });
// });

// describe("statement with deposit and withdraw", function () {
//   it("can print a statement with a deposit and a withdraw", function () {
//     const statement = new BankStatement([new Transaction(0, 500, '03/07/2020'), new Transaction(200, 0, '03/12/2020')]);

//     expect(statement.print()).toEqual(
//       "date || credit || debit || balance\n03/12/2020 ||  || 200.00 || 300.00\n03/07/2020 || 500.00 ||  || 500.00"
//     );
//   });
// });
