class BankStatement extends Account {
  constructor(account) {
    super(account);
    this.transaction = [];
  }
  print() {
    return `date || credit || debit || balance\n${this.transactions()}`;
  }
  transactions() {
    for (let i = 0; i < this.balance.length; i++) {
      this.transaction.push(
        `${this.date[i]} || ${this.credit[i].toFixed(2)} || ${this.debit[i].toFixed(2)} || ${this.balance[i].toFixed(2)}`
      );}
    return this.transaction.reverse().join(`\n`);}
}