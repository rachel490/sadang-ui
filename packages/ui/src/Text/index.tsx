import classNames from 'classnames/bind'
import styles from './text.module.scss'

import {Fragment} from 'react/jsx-runtime'
import type {HTMLAttributes} from 'react'
import type {Color} from 'src/colors'

const cx = classNames.bind(styles)

// TODO: 타입 공부 필요
// PropsWithChildren<TextProps>

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    color?: Color
    size?: 't1' | 't2' | 't3' | 't4' | 't5' | 't6'
    bold?: boolean
}

export function Text({children, color = 'adaptiveGrey900', size = 't3', bold = false, ...props}: TextProps = {}) {
    if (typeof children !== 'string') {
        return (
            <div
                className={cx({
                    [`color-${color}`]: color,
                    [`typography-${size}`]: true,
                    bold: bold,
                })}
                {...props}
            >
                {children}
            </div>
        )
    }

    return (
        <div
            className={cx({
                [`color-${color}`]: color,
                [`typography-${size}`]: true,
                bold: bold,
            })}
            {...props}
        >
            {children.split('\\n').map((text: string, idx: number) => (
                <Fragment key={idx}>
                    {text}
                    <br />
                </Fragment>
            ))}
        </div>
    )
}
