import { App } from 'vue';
export type ToastOptions = {
    message: string;
    position?: 'center' | 'top' | 'bottom';
    duration?: number;
};
declare function toast(options: string | ToastOptions): void;
declare const ToastPlugin: {
    install(app: App): void;
};
export default ToastPlugin;
export type ToastFn = typeof toast;
