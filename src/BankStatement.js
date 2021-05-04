class BankStatement extends Account {
  constructor(account) {
    super(account)
    this.transaction = []
  }
  print() {
    return `date || credit || debit || balance\n${this.transactions()}`
  }
  transactions() {
    for (let i = 0; i < this.balance.length; i++) {
       this.transaction.push(`${this.date[i]} || ${this.credit[i]}.00 || ${this.debit[i]}.00 || ${this.balance[i]}.00`)
    }
    return this.transaction.join(`\n`)
  }
}