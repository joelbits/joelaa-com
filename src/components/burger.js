import React from 'react'
import styleable from 'react-styleable'
import styles from '../styles/burger.module.sass'

const Burger = ({ css, open, ...restProps }) => {
    return (
        <div className={`${open ? css.burgerOpen : css.burgerClosed}`} {...restProps}>
            <div />
            <div />
            <div />
        </div>
    )
  }

export default styleable(styles)(Burger)
