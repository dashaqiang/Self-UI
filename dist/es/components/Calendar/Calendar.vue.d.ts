import dayjs from 'dayjs';
import type { DayType } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    initDate: {
        type: (StringConstructor | DateConstructor | NumberConstructor)[];
        default: () => dayjs.Dayjs;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "day-click": (value: DayType) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    initDate: {
        type: (StringConstructor | DateConstructor | NumberConstructor)[];
        default: () => dayjs.Dayjs;
    };
}>> & Readonly<{
    "onDay-click"?: ((value: DayType) => any) | undefined;
}>, {
    showToday: boolean;
    initDate: string | number | Date;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    day?(_: {
        day: DayType;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
