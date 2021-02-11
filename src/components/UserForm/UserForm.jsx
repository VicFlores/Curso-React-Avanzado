import React from 'react';
import useInputValue from '../../hooks/useInputValue';
import { Title, Form, Input, Button, Error } from './style';

const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          type="email"
          placeholder="Email"
          {...email}
        />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Password"
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      <Error>{error}</Error>
    </div>
  );
};

export default UserForm;
