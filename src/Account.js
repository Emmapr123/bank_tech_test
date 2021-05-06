class Account {
  constructor() {
    this.transactions = []
  }
  deposit(amount) {
    this.transactions.push(new Transaction(amount, 0, this.createDate()))
  }
  withdraw(amount) {
    this.transactions.push(new Transaction(0, amount, this.createDate()))
  }
  createDate() {
    return new Date().toLocaleDateString()
  }
}