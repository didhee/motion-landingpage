'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText, TitleText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People In The MetaVerse!" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the
            same MetaVerse
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[68px] flex w-full h-[550px] relative"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="bounce-animation bottom-20 absolute right-20 w-[100px] h-[100px] bg-[url('/pin.png')]">
          <img
            src="/people-01.png"
            alt="people"
            className="w-[70px] h-[70px] p-[6px] rounded-full relative left-[22%] top-[6%]"
          />
          <div className="w-full h-full bg-[url('/orange-blur.png')] object-contain rounded-full relative bottom-[5rem]" />
        </div>

        <div className="bounce-animation top-20 rounded-full absolute left-20 w-[100px] h-[100px] bg-[url('/pin.png')] ">
          <img
            src="/people-02.png"
            alt="people"
            className="w-[70px] h-[70px] p-[6px] rounded-full relative left-[22%] top-[6%]"
          />
          <div className="w-full h-full bg-[url('/pink-blur.png')] object-contain rounded-full relative bottom-[5rem]" />
        </div>

        <div className="bounce-animation top-1/2 rounded-full absolute right-[45%] w-[100px] h-[100px] bg-[url('/pin.png')] ">
          <img
            src="/people-03.png"
            alt="people"
            className="w-[70px] h-[70px] p-[6px] rounded-full relative left-[22%] top-[6%]"
          />
          <div className="w-full h-full bg-[url('/blue-blur.png')] object-contain rounded-full relative bottom-[5rem]" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
