import type { InputType } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: () => InputType;
        default: string;
    };
    label: StringConstructor;
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessage: StringConstructor;
    helpText: StringConstructor;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: () => InputType;
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
}>, {
    error: boolean;
    type: InputType;
    disabled: boolean;
    modelValue: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
