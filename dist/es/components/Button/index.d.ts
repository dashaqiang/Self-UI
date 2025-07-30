import './style.scss';
export declare const SelfButton: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: () => import("./types").ButtonType;
            default: string;
        };
        size: {
            type: () => import("./types").ButtonSize;
            default: string;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => void;
    }, import("vue").PublicProps, {
        type: import("./types").ButtonType;
        size: import("./types").ButtonSize;
        block: boolean;
        disabled: boolean;
        loading: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: () => import("./types").ButtonType;
            default: string;
        };
        size: {
            type: () => import("./types").ButtonSize;
            default: string;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        type: import("./types").ButtonType;
        size: import("./types").ButtonSize;
        block: boolean;
        disabled: boolean;
        loading: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: () => import("./types").ButtonType;
        default: string;
    };
    size: {
        type: () => import("./types").ButtonSize;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, {
    type: import("./types").ButtonType;
    size: import("./types").ButtonSize;
    block: boolean;
    disabled: boolean;
    loading: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import("vue").Plugin<any[], any[]>;
export default SelfButton;
export * from './types';
