# pii-finder
JS library to detect PII

## What is a PII?
PII means Personally Identifiable Information

The goal of this library is to detect probable PII.


## Installation
todo

## Usage
`pii-finder` works in different ways thanks to multiple helpers

### containsPII
Simplest helper. returns a boolean depending if a PII is present in the given argument.

```
import { containsPII } from 'pii-checker';


const text = 'This is a text containing an email address myemail@address.com';

containsPII(text); // return true

```


## Different PII checked
For now these PII are checked:
- email
- ipv4
- ipv6


coming next:
- phone number
- credit card number
- passport number
- phone number
