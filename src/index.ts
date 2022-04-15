import './index.css';
import './index.less';
import './index.scss';

import './fonts/iconfont.css';

import logo from '../public/logo.jpg'

const img = new Image()
img.src = logo

document.getElementById('imgBox')?.appendChild(img)

// 按需加载
img.addEventListener('click', () => {
  import('./desc').then(({ default: element }) => {
    console.log(element)
    document.body.appendChild(element)
  })
})

import indexVue from './index.vue';
import { createApp } from 'vue';

createApp(indexVue).mount('#vue');

class Father {
  private name;
  constructor() {
    this.name = 'merlin'
  }
  say() {
    console.log('hello')
  }
}

let f = new Father();
f.say();


import $ from 'jquery';

$('#app').text('hello jquery')


let div = document.querySelector('#vue');

import 'moment/locale/zh-cn';


div?.addEventListener('click', () => {
  import('moment').then(({ default: moment }) => {
    //手动引入所需要的语言包
    moment.locale('zh-cn');
    let r = moment().endOf('day').fromNow();
    console.log(r)
  })
})


import rr from './index2';
console.log(rr)

const a = 'Hello merlin'
console.log(a)
export { a }
