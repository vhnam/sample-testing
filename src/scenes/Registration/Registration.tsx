import React from 'react';

import Form from './Form';

import styles from './Registration.module.css';

const Registration = () => {
  return (
    <main className={styles.container}>
      <div className={styles.form}>
        <h1>Register Form</h1>
        <Form />
      </div>
    </main>
  );
};

export default Registration;
