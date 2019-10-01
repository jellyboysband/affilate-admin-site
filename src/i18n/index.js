// import Vue from 'vue'

// // add translations directly to the application
// Vue.i18n.add('br', require('./pt_br.json'))
// Vue.i18n.add('en', require('./en.json'))
// Vue.i18n.add('es', require('./es.json'))
// Vue.i18n.add('cn', require('./cn.json'))

// // set the start locale to use
// Vue.i18n.set('en')

// // set fallback for non-translated strings
// Vue.i18n.fallback('en')



const translate = require('@vitalets/google-translate-api');


const dottie = require('dottie');
const fs = require('fs');
const en = require('./en.json');

(async () => {
  // const unpack = async (data, prefix = '') => {
  //   let ru = {}
  //   for (const key in data) {
  //     if (data[key] instanceof Object) {
  //       ru = { ...ru, ...(await unpack(data[key], key + '.')) }
  //     } else {
  //       ru[prefix + key] = data[key] //await translate(data[key], { to: 'ru', from: 'en' }).text
  //     }
  //   }
  //   return ru
  // }
  const flat = Object.entries(dottie.flatten(en, '.'))

  const keys = flat.map(it => it[0])
  const values = flat.map(it => it[1])

  // const enStr = values.join(' ### ')
  // fs.writeFileSync(__dirname + '/en.txt', enStr)
  const ruStr = require('./t.json').t


  const ruValues = ruStr.split(' ### ')

  let ru = {};
  for (let i = 0; i < keys.length; i++) {
    ru[keys[i]] = ruValues[i]
  }
  fs.writeFileSync(__dirname + '/ru.json', JSON.stringify(dottie.transform(ru)))
})()


// const translate = require('@vitalets/google-translate-api');

// translate('Ik spreek Engels', { to: 'en' }).then(res => {
//   console.log(res.text);
//   //=> I speak English
//   console.log(res.from.language.iso);
//   //=> nl
// }).catch(err => {
//   console.error(err);
// });