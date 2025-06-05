import styled, { css } from 'styled-components';
import { FlexboxComponent, FlexboxProps, StyleProps } from './types';
import baseShouldForwardProp from '@styled-system/should-forward-prop';
import { media } from '@/utils/media';

const getFlexStyles = (props: StyleProps) => css`
    flex-direction: ${props.column ? 'column' : 'row'};
    flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'};
    align-items: ${props.align || 'center'};
    justify-content: ${props.justify || 'space-between'};
    gap: ${typeof props.gap === 'number' ? `${props.gap}px` : props.gap || '0'};
`;

// improvement for avoiding props on DOM element
const internalProps = [
    'column',
    'wrap',
    'align',
    'justify',
    'gap',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
];

const shouldForwardProp = (prop: string) =>
    baseShouldForwardProp(prop) && !internalProps.includes(prop);

const StyledFlex = styled('div').withConfig({ shouldForwardProp })<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FlexboxProps<any>
>`
    display: flex;
    ${(props) => getFlexStyles(props)}

    ${(props) =>
        props.xs &&
        media('xs')(css`
            ${getFlexStyles(props.xs)}
        `)}
    ${(props) =>
        props.sm &&
        media('sm')(css`
            ${getFlexStyles(props.sm)}
        `)}
    ${(props) =>
        props.md &&
        media('md')(css`
            ${getFlexStyles(props.md)}
        `)}
    ${(props) =>
        props.lg &&
        media('lg')(css`
            ${getFlexStyles(props.lg)}
        `)}
    ${(props) =>
        props.xl &&
        media('xl')(css`
            ${getFlexStyles(props.xl)}
        `)}
`;

const Flexbox: FlexboxComponent = (props) => {
    const { as, children, ...rest } = props;
    return (
        <StyledFlex as={as} {...rest}>
            {children}
        </StyledFlex>
    );
};

export default Flexbox;
