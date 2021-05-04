class BankStatement {
  constructor(debit, credit) {
    this.debit = []
    this.credit = []
  }
  balance() {
    return 0
  }
  deposit() {
    this.credit.push(1000)
  }
}