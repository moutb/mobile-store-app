import React from 'react';

export type StyleProps = {
    column?: boolean;
    wrap?: boolean;
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
    gap?: string | number;
};

export type FlexboxProps<T extends keyof React.JSX.IntrinsicElements> =
    StyleProps & {
        children?: React.ReactNode;
        xs?: StyleProps;
        sm?: StyleProps;
        md?: StyleProps;
        lg?: StyleProps;
        xl?: StyleProps;
        as?: T;
    } & React.JSX.IntrinsicElements[T];

export type FlexboxComponent = <
    T extends keyof React.JSX.IntrinsicElements = 'div',
>(
    props: FlexboxProps<T>,
) => React.JSX.Element;
