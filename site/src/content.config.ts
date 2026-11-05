import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './consts';

const categoryKeys = Object.keys(CATEGORIES) as [string, ...string[]];

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			// 検索結果に出る説明文。120字前後
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.enum(categoryKeys),
			tags: z.array(z.string()).default([]),
			// 狙う検索キーワード（記事の中では使わない。管理用）
			keyword: z.string().optional(),
			// 広告リンクを含むなら true。記事の上に PR 表記が出る（ステマ規制の対応）
			pr: z.boolean().default(false),
			heroImage: z.optional(image()),
			// true の記事はビルドに含めない（書きかけ）
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
