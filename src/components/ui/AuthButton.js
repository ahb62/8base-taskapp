import { useCallback } from 'react';
import { useApolloClient, useQuery } from '@apollo/client';
import { useAuth } from '8base-react-sdk';

import Button from 'react-bootstrap/Button';

import { CURRENT_USER_QUERY } from 'shared/graphql';

export const AuthButton = () => {
  const { authClient, isAuthorized } = useAuth();
  const apolloClient = useApolloClient();
  const { loading } = useQuery(CURRENT_USER_QUERY);

  const onLogoutClick = useCallback(async () => {
    await apolloClient.clearStore();
    authClient.logout();
  }, [apolloClient, authClient]);

  const onLoginClick = useCallback(() => {
    authClient.authorize();
  }, [authClient]);

  if (loading) {
    return null;
  }

  if (isAuthorized) {
    return(
      <Button variant="warning" onClick={onLogoutClick}>Sign Out</Button>
    )
  }

  return(
    <Button variant="info" onClick={onLoginClick}>Sign In</Button>
  )
};