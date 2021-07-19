import React from 'react'
import styles from './ScrollNumber.module.css'

function isSafari() {
  const ua = navigator.userAgent.toLowerCase()
  const testUA = (regexp) => regexp.test(ua)
  return testUA(/safari/g) && !testUA(/chrome/g)
}

export default function ScrollNumber({
  WrapperComponent = 'div',
  number = 0,
  delay = 1,
  blur = 2
}) {
  const ulRef = React.useRef(null)

  // Safari 兼容代码
  React.useEffect(() => {
    let timer

    if (isSafari()) {
      timer = setTimeout(() => {
        ulRef.current.setAttribute(
          'style',
          `animation: none; transform: translateY(calc(var(--i) * -9.09%))`
        )
      }, delay * 1000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [delay])

  return (
    <WrapperComponent
      className={styles.ScrollNumber}
      style={{ '--i': number, '--delay': delay }}
    >
      <ul ref={ulRef}>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
      </ul>

      <svg width="0" height="0">
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation={`0 ${blur}`} />
        </filter>
      </svg>
    </WrapperComponent>
  )
}
