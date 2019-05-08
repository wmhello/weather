//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        temp: "4",
        low: "-1",
        high: "10",
        type: "晴",
        city: "北京",
        week: "星期二",
        weather: "无持续风向  微风级",
        arr:[
            {name: '张三'},
            {name: '李四'}
        ],
        item:{
            index: 0,
            msg: 'this is a template',
            time: '2018-06-13'
        }
    }
})

