import gql from "graphql-tag";

export const QUERY_ME = gql`

query Me {
  me {
    _id
    email
    username
    savedBooks {
      _id
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;