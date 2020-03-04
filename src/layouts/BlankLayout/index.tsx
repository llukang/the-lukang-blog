import React from 'react';
import styles from './index.less';

const BlankLayout: React.FC = props => {
  return <div className={styles.normal}>{props.children}</div>;
};

export default BlankLayout;
