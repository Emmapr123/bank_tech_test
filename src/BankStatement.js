class BankStatement {
  constructor(transaction=[]) {
    this.transaction = transaction;
    this.statement = [],
    this.balance = 0
  }
  print() {
    return  `date || credit || debit || balance\n${this.transactions()}`;
  }
  transactions() {
    for (let i = 0; i < this.transaction.length; i++) {
      this.calculateBalance(i)

      this.statement.push(
        `${this.transaction[i].date} || ${this.blankSpaces(this.transaction[i].credit)} || ${this.blankSpaces(this.transaction[i].debit)} || ${this.balance.toFixed(2)}`
      );}
    return this.statement.reverse().join(`\n`);
  }
  blankSpaces(input) {
    return (input === 0 ? '' : input.toFixed(2))
  }
  calculateBalance(index) {
    if (this.transaction[index - 1]) {
      this.transaction[index].credit ? this.balance += this.transaction[index].credit :  this.balance -= this.transaction[index].debit
    } else {
      this.transaction[index].credit ? this.balance = this.transaction[index].credit : this.balance = this.transaction[index].debit
    }
  }
}