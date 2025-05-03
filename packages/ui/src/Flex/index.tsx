import classNames from 'classnames/bind'
import styles from './flex.module.scss'
import type {HTMLAttributes} from 'react'

const cx = classNames.bind(styles)

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    direction?: 'row' | 'column'
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
    align?: 'start' | 'center' | 'end'
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function Flex({
    children,
    direction = 'row',
    justify = 'center',
    align = 'center',
    gap = 'sm',
    ...props
}: FlexProps) {
    return (
        <div
            className={cx({
                flex: true,
                [`direction-${direction}`]: true,
                [`justify-${justify}`]: true,
                [`align-${align}`]: true,
                [`gap-${gap}`]: true,
            })}
            {...props}
        >
            {children}
        </div>
    )
}
