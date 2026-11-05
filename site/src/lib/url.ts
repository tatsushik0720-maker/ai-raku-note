// サイト内リンクを作る。GitHub Pages のサブフォルダ（/ai-raku-note/）でも独自ドメインでも切れないようにする
export function u(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
