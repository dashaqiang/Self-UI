import './style.scss';
export declare const SelfInput: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: () => import("./types").InputType;
            default: string;
        };
        label: StringConstructor;
        placeholder: StringConstructor;
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessage: StringConstructor;
        helpText: StringConstructor;
    }>> & Readonly<{
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: string | number) => void;
        focus: (event: FocusEvent) => void;
        blur: (event: FocusEvent) => void;
    }, import("vue").PublicProps, {
        error: boolean;
        type: import("./types").InputType;
        disabled: boolean;
        modelValue: string | number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: () => import("./types").InputType;
            default: string;
        };
        label: StringConstructor;
        placeholder: StringConstructor;
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessage: StringConstructor;
        helpText: StringConstructor;
    }>> & Readonly<{
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        error: boolean;
        type: import("./types").InputType;
        disabled: boolean;
        modelValue: string | number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: () => import("./types").InputType;
        default: string;
    };
    label: StringConstructor;
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessage: StringConstructor;
    helpText: StringConstructor;
}>> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, {
    error: boolean;
    type: import("./types").InputType;
    disabled: boolean;
    modelValue: string | number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
}) & import("vue").Plugin<any[], any[]>;
export default SelfInput;
export * from './types';
