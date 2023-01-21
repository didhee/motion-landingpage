'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} relative py-8`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto gap-8 flex flex-col`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold text-white md:text-[64px] text-[44px]">
          Enter the MetaVerse
        </h4>

        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <img
            src="./headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />

          <span className="font-normal text-[16px] text-white uppercase">
            enter metaverse
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">MetaVerse</h4>
          <p>Copyright © 2022 - 2023 Metaverse. All rights reserved.</p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
