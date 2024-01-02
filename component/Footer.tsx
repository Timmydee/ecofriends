import styles from '@/styles'
import React from 'react'

const Footer = () => {
  return (
    <div className={`${styles.innerWidth} py-2`}>
      <div className='text-center'>
        <h6 className='text-gray-900 font-medium text-lg'>Made with love by Timmy</h6>
      </div>
    </div>
  )
}

export default Footer