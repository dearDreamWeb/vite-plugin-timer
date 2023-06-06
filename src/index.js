import colorsConsole from 'colors-console'
/**
 * 打印build的时间
 * @returns 
 */
export default function timerPlugin(props = {}) {
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
            console.log(colorsConsole(color || 'blue', `${text || 'build complete:'} ${timer}s`))
        },
    }
}