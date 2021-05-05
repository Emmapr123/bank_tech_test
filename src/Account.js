class Account {
  constructor(debit, credit, balance, date) {
    this.debit = [];
    this.credit = [];
    this.balance = [];
    this.date = [];
  }
  deposit(amount) {
    this.credit.push(amount);
    this.updateBalance(amount);
    this.debit.push(0);
  }
  updateBalance(amount) {
    this.previousBalance ? this.balance.push((amount += this.previousBalance)) : this.balance.push(amount);
    this.currentDate();
    this._setPreviousBalance(amount);
  }
  withdraw(amount) {
    if (amount > this.previousBalance) {
      let withdrawError = new Error('Insufficient funds')
      throw withdrawError
    } else {
    this.debit.push(amount)
    this.updateBalance(-amount);
    this.credit.push(0);
    }
  }
  currentDate() {
    this.date.push(new Date().toLocaleDateString());
  }
  _setPreviousBalance(amount) {
    this.previousBalance = amount;
  }
}
