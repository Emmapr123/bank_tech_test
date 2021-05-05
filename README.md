## Bank tech test

### How to run me

- Clone this repo
- run npm install 
- run 'open SpecRunner.html'
- set the test to not run randomly - but in order
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

- for test coverage, run npm test or yarn test

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
As a wise human
To prevent myself from getting into any kind of dept
I want to not be able to take more money from the account than I have deposited into it
```

```
As a well informed user
To see the status of my account
I want to be able to print a statement, telling me when I deposited and withdrew money from or to my account
```
