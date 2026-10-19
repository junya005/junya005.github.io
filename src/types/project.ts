/**
 * 作品（ゲームプロジェクト）の型定義
 */
export interface Project {
  /** 一意識別子 (例: "game-lilys-mystery-labyrinth") */
  id: string;
  /** カテゴリ (例: "game") */
  category: string;
  /** 作品タイトル */
  title: string;
  /** 作品概要・説明 */
  description: string;
  /** 制作期間文字列 (例: "2026/5/30 - 2026/6/13") */
  period: string;
  /** 制作時間の目安 (例: "20時間 (約2週間)") */
  duration?: string;
  /** 担当役割 (例: "プログラミング / 企画（個人開発）") */
  role?: string;
  /** 技術・ジャンルタグ (例: ["Unity", "2D", "アルゴリズム", "C#"]) */
  tags: string[];
  /** 作品タイプ ("product": 完成作品・プロダクト, "prototype": プロトタイプ・技術検証, "tool": ツール・ミドルウェア) */
  projectType?: "product" | "prototype" | "tool";
  /** 作品タイプリスト表示用ラベル (例: "完成作品", "技術検証", "ツール") */
  projectTypeLabel?: string;
  /** 代表作フラグ */
  isFeatured?: boolean;
  /** 技術ハイライト・こだわり要約 */
  techHighlight?: string;
  /** プラットフォーム (例: "PC WebGL (ブラウザ実行)", "Nintendo Switch") */
  platform?: string;
  /** 使用エンジン / 言語 (例: "Unity / C#") */
  engine?: string;
  /** サムネイル画像パス (public/ からの相対パス) */
  thumbnailPath: string;
  /** WebGLゲーム実行URL */
  projectPath: string;
  /** トレイラー動画等のURL (YouTube等) */
  videoPath?: string;
  /** トレイラー動画等のURL (互換性用エイリアス) */
  videoUrl?: string;
  /** ソースコード等のGitHub URL */
  githubUrl?: string;
}
