import './index.css';
import './index.less';
import './index.scss';

import './fonts/iconfont.css';

import logo from '../public/logo.jpg'

const img = new Image()
img.src = logo

document.getElementById('imgBox').appendChild(img)


import indexVue from './index.vue';
import { createApp } from 'vue';

createApp(indexVue).mount('#vue');

class Father {
  constructor() {
    this.name = 'merlin'
  }
  say() {
    console.log('hello')
  }
}

let f = new Father();
f.say();

const a = 'Hello merlin'
console.log(a)
export { a }
