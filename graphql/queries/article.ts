import { gql } from "@apollo/client";

const LIST_ARTICLES = gql`
  query listArticles {
    ArticleItems {
      items {
        content {
          content
          title
          coverImage {
            filename
          }
        }
      }
    }
  }
`;

export { LIST_ARTICLES };
