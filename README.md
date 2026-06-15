# My Portfolio

Astroで構築された、高速でレスポンシブな個人ポートフォリオサイトです。

## 🚀 技術スタック

- **フレームワーク:** [Astro](https://astro.build/)
- **スタイリング:** なし
- **主なインテグレーション:** なし
- **デプロイ先:** Github Pages

## 📁 ディレクトリ構成

```text
├── public/          # 静的アセット（画像、ファビコンなど）及びWebGL
├── src/
│   ├── components/  # 再利用可能なUIコンポーネント
|   ├── contents/    # 詳細ページのポスト等
│   ├── layouts/     # 共通ページレイアウト
│   └── pages/       # ルーティング用ページ（Astro/Markdown）
├── astro.config.mjs # Astroの設定ファイル
└── package.json     # プロジェクトの依存関係とスクリプト
```

## 🛠️ 開発環境のセットアップ

### 1. 依存関係のインストール

プロジェクトのルートディレクトリで以下のコマンドを実行してください。

```bash
npm install
# または pnpm install / yarn install / bun install
```

### 2. ローカル開発サーバーの起動

開発サーバーを起動して、ローカル環境でサイトを確認します。

```bash
npm run dev
```

起動後、ブラウザで `http://localhost:4321` にアクセスしてください。

### 3. 本番用ビルドの作成

本番環境向けにプロジェクトをコンパイル（静的サイト生成またはSSR用ビルド）します。

```bash
npm run build
```

### 4. ビルド成果物のローカルプレビュー

ビルドされた静的ファイルが正しく動作するかローカルでプレビューします。

```bash
npm run preview
```

## 📜 コマンド一覧

| コマンド | 役割 |
| :--- | :--- |
| `npm run dev` | 開発サーバーを起動（ホットリロード有効） |
| `npm run start` | `dev` コマンドのエイリアス |
| `npm run build` | 本番環境向けのビルドを実行 |
| `npm run preview` | ビルド成果物をローカルでプレビュー |
| `npm run astro ...` | Astro CLIコマンドを直接実行 |

## 🛠️ カスタマイズと設定

- **Astroの設定変更:** `astro.config.mjs` を編集してインテグレーションの追加やアダプターの設定を行います。
- **環境変数:** `.env.development` や `.env.production` を作成し、`import.meta.env.YOUR_VARIABLE` でアクセスします。

## 📄 ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) のもとで公開されています。
