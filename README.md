# Mediflow Jobs – v3 (Mobile Optimized)
- モバイル最適化：大きめボタン、フッター手前の**モバイル用クイックバー**（電話/メール/LINE/Messenger）
- ヘッダー：サブタイトル非表示、**タイトルを大型化**
- 日本語/ベトナム語切替
- 主要エリア＋地域フィルタ、タグ表示（#なし）
- フッターに住所を表示（神奈川県緑区橋本）

## セットアップ
```bash
npm i
npm run dev
```

## デプロイ
GitHubにpush → Vercelが自動ビルド

## Messenger URL
`components/JobCard.tsx` と `MobileQuickBar.tsx` の `https://m.me/` を、あなたのFacebookページのURLに変更してください（例: `https://m.me/mediflowjp`）。
