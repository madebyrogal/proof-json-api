var data = require('./data/transactionData');
var JsonApiDataStore = require('jsonapi-datastore/dist/node-jsonapi-datastore').JsonApiDataStore
var JSONAPISerializer = require('json-api-serializer');


console.info('Testing jsonapi-datastore')
var store = new JsonApiDataStore();
store.sync(data.transaction)
var transactions = store.findAll('transaction');
var transaction = store.find('transaction', 620);
console.log('Transactions: ', transactions)
console.log('Transaction: ', transaction)
console.log('Get props from transaction: ', transaction.community_location_name)
// store.sync(data.example)
// var articles = store.findAll('articles');
// var article = store.find('articles', 1);
// console.log('articles: ', articles)
// console.log('article: ', article)
// console.log('Get props from article: ', article.author.name)
// article.author.name = 'Tomek';
// console.log('Get new props from article: ', article.author.name)
// var serializeNew = article.serialize()
// console.log('Serialize after changes: ', serializeNew)
// store.sync(serializeNew)
// console.log('Response with new articles :', store.find('articles', 1))

console.info('Testing json-api-serializer')
var Serializer = new JSONAPISerializer();
Serializer.register('transaction', {});
Serializer.register('articles', {});
var transactions = Serializer.deserialize('transaction', data.transaction);
console.log('Transactions: ', transactions)

