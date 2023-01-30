import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockScalar: any;
  ISO8601DateTime: any;
  JsonScalar: any;
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String'];
  id: Scalars['Int'];
  isFolder?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
};

export type ArticleComponent = {
  __typename?: 'ArticleComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JsonScalar']>;
  coverImage?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
};

export type ArticleFilterQuery = {
  title?: InputMaybe<FilterQueryOperations>;
};

export type ArticleItem = {
  __typename?: 'ArticleItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<ArticleComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type ArticleItems = {
  __typename?: 'ArticleItems';
  items?: Maybe<Array<Maybe<ArticleItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Asset = {
  __typename?: 'Asset';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  focus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']>;
  content_string?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type FilterQueryOperations = {
  /** Must match all values of given array */
  all_in_array?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Greater than float value */
  gt_float?: InputMaybe<Scalars['Float']>;
  /** Greater than integer value */
  gt_int?: InputMaybe<Scalars['Int']>;
  /** Matches exactly one value */
  in?: InputMaybe<Scalars['String']>;
  /** Matches any value of given array */
  in_array?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches exactly one integer value */
  in_int?: InputMaybe<Scalars['Int']>;
  /** Matches exactly one value with a wildcard search using * */
  like?: InputMaybe<Scalars['String']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Less than float value */
  lt_float?: InputMaybe<Scalars['Float']>;
  /** Less than integer value */
  lt_int?: InputMaybe<Scalars['Int']>;
  /** Matches all without the given value */
  not_in?: InputMaybe<Scalars['String']>;
  /** Matches all without the given value */
  not_like?: InputMaybe<Scalars['String']>;
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id?: Maybe<Scalars['Int']>;
  isFolder?: Maybe<Scalars['Boolean']>;
  isStartpage?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['BlockScalar']>;
  component?: Maybe<Scalars['String']>;
};

export type PageItem = {
  __typename?: 'PageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PageComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type PageItems = {
  __typename?: 'PageItems';
  items?: Maybe<Array<Maybe<PageItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  ArticleItem?: Maybe<ArticleItem>;
  ArticleItems?: Maybe<ArticleItems>;
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  Links?: Maybe<LinkEntries>;
  PageItem?: Maybe<PageItem>;
  PageItems?: Maybe<PageItems>;
  RateLimit?: Maybe<RateLimit>;
  Space?: Maybe<Space>;
  Tags?: Maybe<Tags>;
};


export type QueryTypeArticleItemArgs = {
  find_by?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
};


export type QueryTypeArticleItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']>;
  by_uuids?: InputMaybe<Scalars['String']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']>;
  excluding_fields?: InputMaybe<Scalars['String']>;
  excluding_ids?: InputMaybe<Scalars['String']>;
  excluding_slugs?: InputMaybe<Scalars['String']>;
  fallback_lang?: InputMaybe<Scalars['String']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']>;
  filter_query_v2?: InputMaybe<ArticleFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']>;
  first_published_at_lt?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['String']>;
  is_startpage?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  published_at_gt?: InputMaybe<Scalars['String']>;
  published_at_lt?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
  search_term?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  starts_with?: InputMaybe<Scalars['String']>;
  with_tag?: InputMaybe<Scalars['String']>;
};


export type QueryTypeContentNodeArgs = {
  find_by?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
};


export type QueryTypeContentNodesArgs = {
  by_slugs?: InputMaybe<Scalars['String']>;
  by_uuids?: InputMaybe<Scalars['String']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']>;
  excluding_fields?: InputMaybe<Scalars['String']>;
  excluding_ids?: InputMaybe<Scalars['String']>;
  excluding_slugs?: InputMaybe<Scalars['String']>;
  fallback_lang?: InputMaybe<Scalars['String']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']>;
  first_published_at_gt?: InputMaybe<Scalars['String']>;
  first_published_at_lt?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['String']>;
  is_startpage?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  published_at_gt?: InputMaybe<Scalars['String']>;
  published_at_lt?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
  search_term?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  starts_with?: InputMaybe<Scalars['String']>;
  with_tag?: InputMaybe<Scalars['String']>;
};


export type QueryTypeDatasourceEntriesArgs = {
  datasource?: InputMaybe<Scalars['String']>;
  dimension?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeDatasourcesArgs = {
  by_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryTypeLinksArgs = {
  paginated?: InputMaybe<Scalars['Boolean']>;
  starts_with?: InputMaybe<Scalars['String']>;
};


export type QueryTypePageItemArgs = {
  find_by?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
};


export type QueryTypePageItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']>;
  by_uuids?: InputMaybe<Scalars['String']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']>;
  excluding_fields?: InputMaybe<Scalars['String']>;
  excluding_ids?: InputMaybe<Scalars['String']>;
  excluding_slugs?: InputMaybe<Scalars['String']>;
  fallback_lang?: InputMaybe<Scalars['String']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']>;
  first_published_at_gt?: InputMaybe<Scalars['String']>;
  first_published_at_lt?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['String']>;
  is_startpage?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  published_at_gt?: InputMaybe<Scalars['String']>;
  published_at_lt?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
  search_term?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  starts_with?: InputMaybe<Scalars['String']>;
  with_tag?: InputMaybe<Scalars['String']>;
};


export type QueryTypeTagsArgs = {
  starts_with?: InputMaybe<Scalars['String']>;
};

export type RateLimit = {
  __typename?: 'RateLimit';
  maxCost: Scalars['Int'];
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String'];
  id: Scalars['Int'];
  languageCodes: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  version: Scalars['Int'];
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  taggingsCount: Scalars['Int'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type ListArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListArticlesQuery = { __typename?: 'QueryType', ArticleItems?: { __typename?: 'ArticleItems', items?: Array<{ __typename?: 'ArticleItem', content?: { __typename?: 'ArticleComponent', content?: any | null, title?: string | null, coverImage?: { __typename?: 'Asset', filename: string } | null } | null } | null> | null } | null };


export const ListArticlesDocument = gql`
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

/**
 * __useListArticlesQuery__
 *
 * To run a query within a React component, call `useListArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ListArticlesQuery, ListArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListArticlesQuery, ListArticlesQueryVariables>(ListArticlesDocument, options);
      }
export function useListArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListArticlesQuery, ListArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListArticlesQuery, ListArticlesQueryVariables>(ListArticlesDocument, options);
        }
export type ListArticlesQueryHookResult = ReturnType<typeof useListArticlesQuery>;
export type ListArticlesLazyQueryHookResult = ReturnType<typeof useListArticlesLazyQuery>;
export type ListArticlesQueryResult = Apollo.QueryResult<ListArticlesQuery, ListArticlesQueryVariables>;