/**
 * スキル（技術スタック）の型定義
 */
export interface Skill {
  /** スキルID (例: "csharp", "unity", "antigravity") */
  id: string;
  /** スキル名 */
  name: string;
  /** カテゴリ ("game" | "tool" | "ai") */
  category: "game" | "tool" | "ai";
  /** カテゴリ表示名 (例: "ゲーム開発 & 言語") */
  categoryLabel: string;
  /** タグ・役割 (例: "メイン言語", "エンジン", "AIエージェント") */
  tag: string;
  /** スキルの概要・位置づけ */
  description: string;
  /** 具体的にできること・実装実績一覧 */
  capabilities: string[];
  /** 今後の学習目標・挑戦したい技術（向上心・成長意欲） */
  futureGoals?: string;
  /** この技術を使って制作した作品ID（projects.jsonのidに対応） */
  relatedProjectIds: string[];
}
