/**
 * 動画（YouTube）URLの判定と埋め込み情報抽出ユーティリティ
 */

export interface VideoInfo {
  /** YouTube埋め込み用URL (例: https://www.youtube.com/embed/xxxx) */
  embedUrl: string;
  /** YouTube Shorts (縦長 9:16) かどうか */
  isShorts: boolean;
  /** 動画ID */
  videoId: string;
}

/**
 * URL文字列からYouTubeの動画情報をパースして返却する
 * @param url YouTubeのURL（Shorts / 通常動画 / youtu.be など）
 * @returns VideoInfo または null（YouTube以外のURLや空の場合）
 */
export function parseYouTubeVideo(url?: string | null): VideoInfo | null {
  if (!url) return null;

  // 1. YouTube Shorts 判定: youtube.com/shorts/{videoId}
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) {
    const videoId = shortsMatch[1];
    return {
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      isShorts: true,
      videoId,
    };
  }

  // 2. 通常のYouTube動画判定: youtube.com/watch?v={videoId}
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (watchMatch && watchMatch[1]) {
    const videoId = watchMatch[1];
    return {
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      isShorts: false,
      videoId,
    };
  }

  // 3. 短縮URL判定: youtu.be/{videoId}
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch && youtuBeMatch[1]) {
    const videoId = youtuBeMatch[1];
    return {
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      isShorts: false,
      videoId,
    };
  }

  return null;
}
