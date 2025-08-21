# Mediflow Jobs (JP/VI) – v3 Mobile
- スマホ最適化（大きめボタン／読みやすい文字／余白拡張）
- タイトル拡大（Mediflow Jobs）。**サブタイトルは非表示**
- 電話 / メール / LINE / Messenger ボタン
- 主要エリア + 地域フィルタ、JP/VI切替
- フッターに住所（神奈川県緑区橋本）

## セットアップ
```bash
npm i
npm run dev
```

## デプロイ
GitHubへpushするとVercelで自動ビルド。

## Messenger URL
`components/JobCard.tsx` の `https://m.me/` を、あなたのFBページに変更してください（例 `https://m.me/mediflowjp`）。
