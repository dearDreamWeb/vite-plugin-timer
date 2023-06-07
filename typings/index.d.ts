import { Props } from '../index';
/**
 * 打印build的时间
 * @returns
 */
declare function timerPlugin(props?: Props): {
    name: string;
    buildStart(): void;
    buildEnd(): void;
};
export default timerPlugin;
