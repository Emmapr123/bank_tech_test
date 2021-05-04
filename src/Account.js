class Account {
  constructor(debit, credit, balance) {
    this.debit = []
    this.credit = []
    this.balance = []
    this.date = []
  }
  deposit(amount) {
    this.credit.push(amount)
    this.updateBalance(amount)
    this.debit.push(0)
  }
  updateBalance(amount) {
    let previousBalance = this.balance[this.balance.length - 1]
    previousBalance ? this.balance.push(amount += previousBalance) : this.balance.push(amount)
  }
  withdraw(amount) {
    this.debit.push(amount)
    this.updateBalance(-amount)
    this.credit.push(0)
  }
}