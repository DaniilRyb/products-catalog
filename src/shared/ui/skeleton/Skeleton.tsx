import React from 'react';

import { StyledFlexCardCategory } from '../../../styles/styles-flex-card-category/styledFlexCardCategory';

import styles from './Skeleton.module.css';

export const Skeleton = () => {
  return (
    <StyledFlexCardCategory>
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
      <div className={styles.skeleton} />
    </StyledFlexCardCategory>
  );
};
