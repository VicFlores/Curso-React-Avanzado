import React from 'react';
import useInputValue from '../../hooks/useInputValue';
import { Title, Form, Input, Button } from './style';

const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <div>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type="email" placeholder="Email" {...email} />
        <Input type="password" placeholder="Password" {...password} />
        <Button>{title}</Button>
      </Form>
    </div>
  );
};

export default UserForm;
