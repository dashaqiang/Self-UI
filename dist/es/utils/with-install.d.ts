import type { Plugin, Component } from 'vue';
export declare const withInstall: <T extends Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>(component: T, alias?: string) => T & Plugin<any[], any[]>;
