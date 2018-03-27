# wangying

> 这是一个项目描述

## Build Setup
>这是一个利用豆瓣电影的免费api写的一个简单的vue项目，
>中间有用到vue-router路由才控制组件得显示，
>用到vuex来共享数据
>利用axios来发送请求（但是发现请求豆瓣的免费接口涉及到跨域的问题，最后用jsonp这个VUe插件来请求的数据）
>中间遇见的问题：如果父组件给子组件传值，利用的是属性绑定的形式，在子组件中用props接受，但是如果你直接将接受到的值跟v-model绑定在一起，会导致父组件的值一起发生改变，解决这种事情的方式可以利用计算属性，将prop得到的值先转换为字符串再转换为正常，再操作就不会有问题。
>发现：axios是利用node.js和Promise，在.then中的this是只想当前作用域的this，如果想让this指向vue实例要在后面加.bind(this)即可；
>问题：利用axios发送post请求的时候后台拿不到数据，可以这样解决：axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
也可以利用node的qs模块对数据进行处理，也可以让后台改变获取数据的方式。
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
