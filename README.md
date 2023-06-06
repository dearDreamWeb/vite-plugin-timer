# vite-plugin-timer
vite打包过程的时间所消耗的时间显示出来。

# 安装
```bash
npm i vite-plugin-timer -D
```

# 使用
```js
import vitePluginTimer from 'vite-plugin-timer';
export default {
    ...
    plugins:[
        ...
        vitePluginTimer()
    ]
}
```

# 参数
- color
类型： `string`  
默认值： `blue`  
可自定义字体颜色，默认是蓝色`blue`。  
可选值  

  |  值   | 说明  |
  |  ----  | ----  |
  | red  | 红色 |
  | green  | 绿色 |
  | yellow  | 黄色 |
  | blue  | 蓝色 |
  | magenta  | 品红 |
  | cyan  | 青色 |
  | white  | 白色 |

- text
类型： `string`  
默认值： `build complete:`  
可自定义文案，默认是`build complete:`。  

例子
```js
import vitePluginTimer from 'vite-plugin-timer';

export default {
  plugins: [
    vitePluginTimer({
        color:'yellow',
        text: '打包完成：'
    })
  ]
};
```