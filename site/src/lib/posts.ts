import { type CollectionEntry, getCollection } from 'astro:content';

// 公開する記事だけを、新しい順に返す（draft: true は本番では出さない）
export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort(
		(a, b) =>
			(b.data.updatedDate ?? b.data.pubDate).valueOf() -
			(a.data.updatedDate ?? a.data.pubDate).valueOf(),
	);
}
