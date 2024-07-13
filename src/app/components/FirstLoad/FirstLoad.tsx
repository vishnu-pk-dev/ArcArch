'use client';
import {motion} from 'framer-motion';

export default function FirstLoad() {
  const text = 'ArcArch'.split('');
  return (
    <div className=" w-[100vw] h-[100vh] flex  absolute top-0 left-0 pointer-events-none z-50">
      <motion.div
        className=" bg-slate-900 w-1/4"
        initial={{translateY: '0'}}
        animate={{translateY: '-100%'}}
        transition={{duration: 1, delay: 1}}></motion.div>
      <motion.div
        className=" bg-slate-900 w-1/4"
        initial={{translateY: '0'}}
        animate={{translateY: '-100%'}}
        transition={{duration: 1, delay: 1.2}}></motion.div>
      <motion.div
        className=" bg-slate-900 w-1/4"
        initial={{translateY: '0'}}
        animate={{translateY: '-100%'}}
        transition={{duration: 1, delay: 1.3}}></motion.div>
      <motion.div
        className=" bg-slate-900 w-1/4"
        initial={{translateY: '0'}}
        animate={{translateY: '-100%'}}
        transition={{duration: 1, delay: 1.4}}></motion.div>
      <motion.h1 className="absolute flex flex-nowrap top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-[48px] sm:text-[52px] md:text-[74px] lg:text-[120px] xl:text-[180px] 2xl:text-[220px] tracking-[25px] overflow-hidden">
        {text.map((el, i) => (
          <motion.span
            className=" relative color-none"
            initial={{translateY: '100%'}}
            animate={{translateY: '0'}}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}>
            {el}
            {''}
            <motion.span
              className="absolute left-0 text-white"
              initial={{opacity: 1, translateY: '0'}}
              animate={{opacity: 0, translateY: '-60px'}}
              transition={{
                duration: 0.2,
                delay: i / 20 + 1,
              }}
              key={i}>
              {el}
              {''}
            </motion.span>
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
