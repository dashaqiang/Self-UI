import type { ButtonType, ButtonSize } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: () => ButtonType;
        default: string;
    };
    size: {
        type: () => ButtonSize;
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: () => ButtonType;
        default: string;
    };
    size: {
        type: () => ButtonSize;
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
}>, {
    type: ButtonType;
    size: ButtonSize;
    block: boolean;
    disabled: boolean;
    loading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
