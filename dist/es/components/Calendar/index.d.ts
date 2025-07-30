import './style.scss';
export declare const SelfCalendar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        showToday: {
            type: BooleanConstructor;
            default: boolean;
        };
        initDate: {
            type: (StringConstructor | DateConstructor | NumberConstructor)[];
            default: () => import("dayjs").Dayjs;
        };
    }>> & Readonly<{
        "onDay-click"?: ((value: import("./types").DayType) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "day-click": (value: import("./types").DayType) => void;
    }, import("vue").PublicProps, {
        showToday: boolean;
        initDate: string | number | Date;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        showToday: {
            type: BooleanConstructor;
            default: boolean;
        };
        initDate: {
            type: (StringConstructor | DateConstructor | NumberConstructor)[];
            default: () => import("dayjs").Dayjs;
        };
    }>> & Readonly<{
        "onDay-click"?: ((value: import("./types").DayType) => any) | undefined;
    }>, {}, {}, {}, {}, {
        showToday: boolean;
        initDate: string | number | Date;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    initDate: {
        type: (StringConstructor | DateConstructor | NumberConstructor)[];
        default: () => import("dayjs").Dayjs;
    };
}>> & Readonly<{
    "onDay-click"?: ((value: import("./types").DayType) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "day-click": (value: import("./types").DayType) => void;
}, string, {
    showToday: boolean;
    initDate: string | number | Date;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        day?(_: {
            day: import("./types").DayType;
        }): any;
    };
}) & import("vue").Plugin<any[], any[]>;
export default SelfCalendar;
export * from './types';
