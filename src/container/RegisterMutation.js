import { gql, useMutation } from '@apollo/client';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const RegisterMutation = () => {
  const [mutation, { data, error, loading }] = useMutation(REGISTER);
  const registerUser = (email, password) => {
    return mutation({ variables: { input: { email, password } } });
  };
  return { registerUser, data, error, loading };
};
