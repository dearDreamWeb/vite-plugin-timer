type Color = 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
type ColorMap = {
    [key in Color]: string;
};
declare const colorMap: ColorMap;
interface Props {
    color?: Color;
    text?: string;
}
/**
 * 打印build的时间
 * @returns
 */
declare function timerPlugin(props?: Props): {
    name: string;
    buildStart(): void;
    buildEnd(): void;
};
