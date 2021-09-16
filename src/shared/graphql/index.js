import { gql } from '@apollo/client';
/* QUERY HERE */

/* Query the current users details. */
export const CURRENT_USER_QUERY = gql`
  query {
    user {
      id
      email
      lastName
      firstName
    }
  }`;
/* Query the current table */
export const NOTES_LIST_QUERY = gql`
  query { 
  notesList {
      items {
        id
        title
        body
        users {email}
        completed
      }
    }
  }`;
/* MUTATIONS HERE */

/* Sign up a new user mutation. */
export const USER_SIGN_UP_MUTATION = gql`
  mutation UserSignUp($user: UserCreateInput!, $authProfileId: ID) {
    userSignUpWithToken(user: $user, authProfileId: $authProfileId) {
      id
      email
      lastName
      firstName
    }
  }`;

export const ADD_NOTE_MUTATION = gql`
  mutation NoteCreate($data: NoteCreateInput!) {
    noteCreate(data: $data) {
      title
      body
      users {email}
      completed
    }
  }`; 
