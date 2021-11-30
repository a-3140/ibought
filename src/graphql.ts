import gql from "graphql-tag";

export const WANT_QUERY = gql`
  query {
    wants {
      id
      name
      dateAdded
      shopName
      daysToDelay
      price
    }
  }
`;