import gql from "graphql-tag";

export const WANT_QUERY = gql`
  query GetWants($id: String!) {
    getAllWantsByUserId(id: $id) {
      id
      name
      dateAdded
      source
      daysToDelay
      price
    }
  }
`;

export const CURRENT_USER = gql`
  query {
    AuthenticatedUser
  }
`;
