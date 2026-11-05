// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// 公開先は環境変数で切り替える（.github/workflows/deploy.yml で指定）
// 独自ドメインを付けたら、SITE_URL をそのドメインにし、BASE_PATH を / にする
export default defineConfig({
	site: process.env.SITE_URL ?? 'http://localhost:4321',
	base: process.env.BASE_PATH ?? '/',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: { theme: 'github-light' },
	},
});
