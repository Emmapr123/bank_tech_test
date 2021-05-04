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
    this._getPreviousBalance()
    this.previousBalance ? this.balance.push(amount += this.previousBalance) : this.balance.push(amount)
    this.currentDate()
  }
  withdraw(amount) {
    this.debit.push(amount)
    this.updateBalance(-amount)
    this.credit.push(0)
  }
  currentDate() {
    this.date.push(new Date)
  }
  _getPreviousBalance() {
    this.previousBalance = this.balance[this.balance.length - 1]
  }
}