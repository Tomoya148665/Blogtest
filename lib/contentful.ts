import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

// 深さ制限を設けるヘルパー関数
function limitDepth(entry, depth = 2) {
  if (depth === 0 || !entry.fields.relatedArticles) {
    return entry;
  }

  entry.fields.relatedArticles = entry.fields.relatedArticles.map(
    (relatedArticle) => limitDepth(relatedArticle, depth - 1)
  );

  return entry;
}

export async function getPosts() {
  const entries = await client.getEntries({
    content_type: "article",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  // 各記事に対して深さ制限を設ける
  const limitedDepthArticles = entries.items.map((item) => limitDepth(item));

  return limitedDepthArticles;
}

export async function getCategories() {
  const entries = await client.getEntries({
    content_type: "category",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  return entries.items;
}
