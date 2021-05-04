class BankStatement {
  constructor(debit, credit, balance) {
    this.debit = []
    this.credit = []
    this.balance = []
  }
  deposit(amount) {
    this.credit.push(amount)
    this.balance.push(amount)
  }
}