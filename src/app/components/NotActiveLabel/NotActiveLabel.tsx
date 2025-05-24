import React from 'react';
import styles from './NotActiveLabel.module.css';

export interface NotActiveLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
