class BankStatement extends Account {
  constructor(account) {
    super(account)
  }
  print() {
    return `date || credit || debit || balance\n${this.date} || ${this.credit}.00 || ${this.debit}.00 || ${this.balance}.00`
  }
}