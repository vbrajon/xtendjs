import './raw.js'
raw()
arr = [{ name: 'Jane Doe', age: 22 }, { name: 'John Doe', age: 29, birthdate: new Date('1989-11-14') }, { name: 'Janette Doe', age: 22 }, { name: 'Johnny Doe', age: 71, birthdate: new Date('Feb 26, 1932') }]
obj = arr[0]
str = 'i am: The1\nAND\t,_L?on*e%ly.'
date = new Date('2019-01-20T09:09:08Z')

// [ 'name', 'age' ] //
obj.keys()

// [ 'Jane Doe', 22 ] //
obj.values()

// { name: 'Jane Doe', age: 44 } //
obj.map(v => v * 2 || v)

// 'age' //
obj.find(22)

// { age: 22 } //
obj.filter(Number)

// { 'Jane Doe': 'name', 22: 'age' } //
obj.reduce((acc, v, k) => (acc[v] = k, acc), {})

// ['a', /a/] //
[null, 'a', undefined, /a/].filter()

// ['Jane Doe', 'Janette Doe', 'John Doe', 'Johnny Doe'] //
arr.map('name').sort()

// ['Jane Doe', 'Janette Doe'] //
arr.map('name').filter(/Ja/)

// { name: 'Jane Doe', age: 22 } //
arr.find({ name: /Ja/ })

// arr.sort('age').map('age') //
arr.sort(d => d.age).map(d => d.age)

// [[71, 'Johnny Doe'], [29, 'John Doe'], [22, 'Jane Doe'], [22, 'Janette Doe']] //
arr.sort(['-age', 'name']).map(d => [d.age, d.name])

// { 22: ['Jane Doe', 'Janette Doe'], 29: ['John Doe'], 71: ['Johnny Doe'] } //
arr.group('age').map(g => g.map('name'))

// { 22: { 'Jane Doe': [], 'Janette Doe': [] }, 29: { 'John Doe': [] }, 71: { 'Johnny Doe': [] } }
// arr.group(['age', 'name']).map(g => g.map(g => g.map('birthdate')))

// [22, 29, 71] //
arr.map('age').unique()

// 144 //
arr.map('age').sum()

// 22 //
arr.map('age').min()

// 71 //
arr.map('age').max()

// 36 //
arr.map('age').mean()

// 25.5 //
arr.map('age').median()

// ['One', 'Two'] //
[{ a: { b: 'one' } }, { a: { b: 'two' } }].map('a.b.capitalize')

// [1, 2] //
((a, b) => [a, b]).partial(null, 2)(1)

// 1 //
const mem = (x => x / 2).memoize()
mem(2)
mem.cache['[2]']

// ['i', 'am', 'The', '1', 'AND', 'Lonely'] //
str.words()

// 'I Am The 1 And Lonely' //
str.join('title')

// 'i-am-The-1-AND-Lonely' //
str.join('-')

// 'i-am-the-1-and-lonely' //
str.join('dash')

// 'i_am_the_1_and_lonely' //
str.join('underscore')

// 'iAmThe1AndLonely' //
str.join('camel')

// 'IAmThe1AndLonely' //
str.join('pascal')

// 'ab' //
'{}{}{}'.format('a', 'b')

// 'bbbaa' //
'{1}{1}{1}{0}{0}'.format('a', 'b')

// 'ab' //
'{}{}{}{1}{1}{1}{0}{0}'.format('a', 'b')

// 'bb' //
// '{k2}{k2}{k3}'.format({ k1: 'a', k2: 'b' })

// '66 pears x 4 apples' //
// '{66} pears x {3} apples'.format((x, i) => +x + i)

// 0.3 //
(.1 * 3).format()

// '-100µ' //
(-.000123456789).format(1)

// '120G' //
(123456789000).format(2)

// '1,010.01' //
(1010.01010).format('en')

// '1 010,01' //
(1010.01010).format('fr')

// 3 //
(3.1415).floor()

// -1 //
Math.PI.cos()

// 9 //
(3).pow(2)

// '-10 hours' //
(-36666666).duration()

// '12 seconds ago' //
date.minus('12 seconds').relative(date)

// '2019-01-20' //
date.format()

// '20/01/2019 10h09m' //
date.format('DD/MM/YYYY hhhmmm')

// 'Q1 W3' //
date.format('QQ WW')

// '20 janvier 2019' //
date.format('day, month, year', 'fr')

// 'Sunday, January 20, 10:09:08 AM' //
date.format('month, day, weekday, hour, minute, second')

// '2019-01-21' //
date.plus('day').format()

// 8 //
Date.getWeek(new Date('2015-02-26'))

// 9 //
Date.getWeek(new Date('2018-02-26'))

// 2 //
Date.getQuarter(new Date('2018-04-01'))

// '2019-02-28' //
new Date('2019-05-31').minus('3 month').format()

// '2019-02-28' //
new Date('2019-01-31').plus('1 month').format()

// '2017-02-28' //
new Date('2016-02-29').plus('1 year').format()

// '2019-01-31' //
new Date('2018-12-31').plus('1 month').format()

// '2018-11-30' //
new Date('2018-12-31').minus('1 month').format()

// '2018-11-30' //
new Date('2018-12-31').minus('1 month').format()

// '2017-12-18' //
date.minus('1 year, 1 month and 2 days').format()

// '2018-12-31T23:00:00.000Z' //
date.start('month').toISOString()

// '2019-12-31T22:59:59.000Z' //
date.end('year').toISOString()