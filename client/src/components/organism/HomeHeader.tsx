import React from 'react'
import styles from '../../styles/home-header.module.scss'
import Image from 'next/image'



const HomeHeader = () => {
  return (
    <div className={styles.container} >
      <div className={styles.background_image_wrapper} >
        <Image
          src={'/SvWWN.png'}
          fill
          alt='123'
          className={styles.background_image}
        />
      </div>

      
      {/* 여기는 클라이언트 컴포넌트 */}
      <section className={styles.section} >
        <div>로고 이미지</div>

        <input
          type='text'
          placeholder='파티명을 입력해주세요!'
          width='300'
          height="50"
        />

        <div>여기에 뭐 적지~</div>
      </section>
    </div>
  )
}

export default HomeHeader