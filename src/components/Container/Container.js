import ClassName from 'models/classname';

import styles from './Container.module.scss';

import { motion, AnimatePresence } from 'framer-motion';

const Container = ({ children, className }) => {
  const containerClassName = new ClassName(styles.container);

  containerClassName.addIf(className, className);

  return (
    <AnimatePresence>
      <motion.div
        className={containerClassName.toString()}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exist={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.65 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Container;
