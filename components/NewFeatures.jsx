import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (

  <div>

    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img
        src={imgUrl}
        alt="icon"
        className="object-contain h-1/2 w-1/2"
      />
    </div>

    <h1 className="mt-[26px] font-bold text-white leading-[30px] text-[24px]">{title}</h1>

    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>

  </div>
);

export default NewFeatures;
