# @geeeger/date-utils

## methods

### getGMT8LocalDate

```javascript
import { getGMT8LocalDate } from '@geeeger/date-utils'

const unixTimestamp = Math.floor(Date.now() / 1000)

const date = getGMT8LocalDate(unixTimestamp)

console.log([date.getFullYear(), date.getMonth(), date.getDate()].join('.'))
console.log([date.getHours(), date.getMinutes(), date.getSeconds()].join(':'))
```

