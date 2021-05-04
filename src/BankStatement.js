class BankStatement {
  constructor(debit, credit) {
    this.debit = []
    this.credit = []
  }
  balance() {
    return 0
  }
  deposit(amount) {
    this.credit.push(amount)
  }
}