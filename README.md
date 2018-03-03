# Sensitive Words

```shell
$ npm install sensitive-words --save
```

```javascript
const { sensitiveWords } = require('sensitive-words');
//ES6
import { sensitiveWords } from 'sensitive-words';

const filteredSentence = sensitiveWords('hello world', ['world']);
console.log(filteredSentence);
//hello ******
```
