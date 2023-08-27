import React from 'react';
import styles from './Skeleton.module.css';
import { StyledFlexCardCategory } from '../../../styles/styles-flex-card-category/styledFlexCardCategory';

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
