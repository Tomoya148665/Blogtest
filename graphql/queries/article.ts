import { gql } from "@apollo/client";

const LIST_ARTICLES = gql`
  query listArticles {
    articleCollection {
      items {
        title
        slug
        coverImage {
          url
        }
        content {
          json
        }
        sys {
          id
        }
      }
      total
    }
  }
`;

export { LIST_ARTICLES };
