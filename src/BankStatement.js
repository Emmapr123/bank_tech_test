class BankStatement {
  constructor(debit, credit, balance) {
    this.debit = []
    this.credit = []
    this.balance = []
  }
  deposit(amount) {
    this.credit.push(amount)
    this.updateBalance(amount)
  }
  updateBalance(amount) {
    let previousBalance = this.balance[this.balance.length - 1]
    previousBalance ? this.balance.push(amount += previousBalance) : this.balance.push(amount)
  }
}