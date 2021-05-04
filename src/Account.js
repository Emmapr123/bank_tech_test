class Account {
  constructor(debit, credit, balance, date) {
    this.debit = []
    this.credit = []
    this.balance = []
    this.date = []
    this.previousBalance
  }
  deposit(amount) {
    this.credit.push(amount)
    this.updateBalance(amount)
    this.debit.push(0)
  }
  updateBalance(amount) {
    this.previousBalance ? this.balance.push(amount += this.previousBalance) : this.balance.push(amount)
    this.currentDate()
    this._setPreviousBalance(amount)
  }
  withdraw(amount) {
    this.debit.push(amount)
    this.updateBalance(-amount)
    this.credit.push(0)
  }
  currentDate() {
    this.date.push(new Date)
  }
  _setPreviousBalance(amount) {
    this.previousBalance = amount
  }
}