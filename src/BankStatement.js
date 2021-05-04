class BankStatement {
  constructor(debit, credit, balance) {
    this.debit = []
    this.credit = []
    this.balance = []
  }
  deposit(amount) {
    this.credit.push(amount)
    let previousBalance = this.balance[this.balance.length - 1]
    if (previousBalance) {
      this.balance.push(amount += previousBalance)
    } else {
      this.balance.push(amount)
    }
  }
}