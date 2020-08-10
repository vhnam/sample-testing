import React from 'react';

import TextField from '../../../components/TextField';
import Button from '../../../components/Button';

import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.container}>
      <form>
        <TextField id="name" label="Name" name="name" disabled={true} />
        <TextField
          id="email"
          label="Email"
          name="email"
          noBorder={true}
          required={true}
          placeholder="Please enter your email"
        />
        <TextField
          id="nickname"
          label="Nick name"
          name="nickname"
          error={true}
          assistiveText="This field is mandatory."
        />
        <TextField
          id="bio"
          label="Bio"
          name="bio"
          multiline={true}
          resizable={false}
          rows={10}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
