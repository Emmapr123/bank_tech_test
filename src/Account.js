class Account {
  constructor() {
    this.transactions = []
  }
  deposit(amount) {
    this.transactions.push(new Transaction(0, amount, this.createDate()))
  }
  withdraw(amount) {
    this.transactions.push(new Transaction(amount, 0, this.createDate()))
  }
  createDate() {
    return new Date().toLocaleDateString()
  }
  print() {
    const statement = new BankStatement(this.transactions)
    return statement.print()
  }
}