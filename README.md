## Bank tech test

### How to run me

- Clone this repo
- run npm install
- run 'open SpecRunner.html'
- open the console

Create a new Bankstatement

```javascript
statement = new BankStatement;
```

Make a deposit
```javascript
statement.deposit(1000);
```

Take money from the account
```javascript
statement.withdraw(500);
```

Print your bank statement
```javascript
statement.print();
```

- for test coverage, run npm run test

### User stories

```
As a user
To add money to my bank account
I want to be able to make a deposit
```

```
As a user
To take money from my bank account
I want to be able to make a withdraw
```

```
As a well informed user
To see the status of my account
I want to be able to print a statement, telling me when I deposited and withdrew money from or to my account
```
### First time Feedback

Your code:
- You’ve made a good choice about how to divide the class responsibilities, and the classes are in good shape.
Printing the statement only works well for whole numbers of the currency. If this was pounds, how would pence be handled?
- Your statement shows the first transaction first. Looking at https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md this should be in reverse chronological order, with the most recent at the top
- Shows 0.00 when printing the statement where the acceptance criteria expect a blank space
- you don’t seem to have any private fields in your classes.

Your tests:
- pass when run according to the instructions
- have excellent coverage
- It’s not immediately clear why tests need to run in order - unit tests should be independent, and not rely on other tests running before or after them. Are your feature tests also run by the SpecRunner page?
- refer to an internal property of the statement to get the date - could you mock this using a Jasmine Spy?
- seem to rely on internal logs of credit/debits rather than external behaviour to check things work as intended. This is really testing state, rather than behaviour. A good self-assessment rule would be if you could change your log to a single log that looked like [{date: 2021-01-01, amount: -10}], would that break your tests?

The rest of the project:
- node_modules isn’t included in your .gitignore - I recommend using https://github.com/github/gitignore when you start a new project to help you not to accidentally check in things like node_modules
- You should provide an index.html to run your code, rather than relying on your specrunner.html
- You’ve used an old version of Karma which means npm is reporting vulnerabilities, which you should fix

Suggestions:
- try not to maintain a balance, where that can be calculated from other fields (this is a code smell, normally information should be held only once)
- It’s a bit unusual to have the bank statement class extend the account - it suggests that the statement is a kind of account. These classes could collaborate in a different way.
- I’d love to see some more context around this in the README - what this project is about, why you’ve chosen to write this in JS for the browser, where you’d take it next
- use either Yarn or NPM - it’s ok to ask people to use yarn, but mixing and matching can cause problems
I’d console.log() what you’re printing, rather than just return it, as the return includes newlines as \n
