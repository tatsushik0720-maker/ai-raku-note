// サイト全体の設定。名前やドメインが決まったら、ここだけ書き換える。

export const SITE_TITLE = 'AIでラクする作業ノート';
export const SITE_DESCRIPTION =
	'Claude・ChatGPT・Obsidian など、実際に使っている AI と作業効率化ツールの使い方と比べ方を、手を動かした記録として残すブログ。';

// 運営者（ハンドルネーム）
export const AUTHOR_NAME = '管理人';
export const AUTHOR_BIO =
	'大学生。YouTube の解説動画づくりやスマホアプリの開発を、AI に手伝わせながら続けています。このブログでは、自分で試してうまくいったこと・つまずいたことをそのまま書きます。';

// お問い合わせフォームの URL（Google フォームなど）。決まるまでは空にしておく
export const CONTACT_FORM_URL = '';

// カテゴリ。記事の frontmatter の category はこの key のどれかにする
export const CATEGORIES = {
	'ai-chat': { name: 'AIチャット', description: 'Claude・ChatGPT・Gemini などの使い方と比べ方' },
	'ai-coding': { name: 'AIで開発', description: 'Claude Code などで、アプリやサイトを作る話' },
	'ai-video': { name: 'AIで動画・音声', description: '動画づくり・音声合成・文字起こしの道具' },
	notes: { name: 'メモ・知識管理', description: 'Obsidian・Notion などで、メモと知識をためる方法' },
	gear: { name: '道具・PC', description: 'AI を使う作業に向く PC・周辺機器・サービス' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
