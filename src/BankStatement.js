class BankStatement {
  constructor(debit, credit, balance) {
    this.debit = []
    this.credit = []
    this.total = []
  }
  balance() {
    return 0
  }
  deposit(amount) {
    this.credit.push(amount)
  }
}