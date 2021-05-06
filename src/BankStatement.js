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
        `${this.date[i]} || ${this.blankSpaces(this.credit[i])} || ${this.blankSpaces(this.debit[i])} || ${this.balance[i].toFixed(2)}`
      );}
    return this.transaction.reverse().join(`\n`);
  }
  blankSpaces(input) {
    return (input === 0 ? '' : input.toFixed(2))
  }
}