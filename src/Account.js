class Account {
  constructor() {
    this.transactions = []
  }
  deposit(amount) {
    this.transactions.push(new Transaction(amount, 0, this.date = new Date().toLocaleDateString()))
  }
  withdraw(amount) {
    this.transactions.push(new Transaction(0, amount, this.date = new Date().toLocaleDateString()))
  }
}