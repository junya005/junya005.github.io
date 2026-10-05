/**
 * URL関連の共通ヘルパーユーティリティ
 */

/**
 * 末尾に必ずスラッシュを持つベースURL（BASE_URL）を返します。
 * 例: "/" または "/portfolio/"
 */
export function getBaseUrl(): string {
  const rawBase = import.meta.env.BASE_URL;
  return rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
}

/**
 * 作品詳細ページの相対パスURLを生成します。
 * 例: "/detail/game-catch-ball/"
 */
export function getDetailUrl(id: string): string {
  return `${getBaseUrl()}detail/${id}/`;
}

/**
 * publicディレクトリ配下のアセット画像URLを解決します。
 * パスが空の場合は空文字を返します。
 */
export function resolveAssetUrl(path: string): string {
  if (!path) return "";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${getBaseUrl()}${cleanPath}`;
}
