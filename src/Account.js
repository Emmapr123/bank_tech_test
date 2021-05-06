class Transaction {
  constructor(debit, credit, date) {
    this.debit = debit;
    this.credit = credit;
    this.date = date;
  }
  deposit(amount) {
    this.credit = amount
  }
  withdraw(amount) {
    this.debit = amount
  }
  currentDate() {
    this.date = new Date().toLocaleDateString();
  }
}
