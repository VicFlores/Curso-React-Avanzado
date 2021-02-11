import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const LoginMutation = () => {
  const [mutation, { data, error, loading }] = useMutation(LOGIN);
  const loginUser = (email, password) => {
    return mutation({ variables: { input: { email, password } } });
  };
  return { loginUser, data, error, loading };
};
