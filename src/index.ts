import { ColorMap, Props } from '../index';

const colorMap: ColorMap = {
  red: '\x1B[31m', // 红色
  green: '\x1B[32m', // 绿色
  yellow: '\x1B[33m', // 黄色
  blue: '\x1B[34m', // 蓝色
  magenta: '\x1B[35m', // 品红
  cyan: '\x1B[36m', // 青色
  white: '\x1B[37m', // 白色
};

/**
 * 打印build的时间
 * @returns
 */
function timerPlugin(props: Props = {}) {
  const { color, text } = props;
  let startTime = +new Date();
  return {
    name: 'timer',
    buildStart() {
      startTime = +new Date();
    },
    buildEnd() {
      const seconds = (+new Date() - startTime) / 1000;
      const timer = seconds % 1 ? seconds.toFixed(2) : seconds;
      console.log(
        `${colorMap[color || 'blue']}%s\x1B[0m`,
        `${text || 'build complete:'} ${timer}s`
      );
    },
  };
}

export default timerPlugin;
