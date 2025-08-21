# Mediflow Jobs (JP/VI) – v2
- 明るい医療系カラー
- **日本語/ベトナム語ワンタップ切替**
- 主要エリア（東京/神奈川 等）＋ 地域（四国/東北 等）フィルタ
- **電話 / メール / LINE / Messenger** ボタン
- 会社ロゴ（/public/logo.png）使用
- フッターに住所: 神奈川県緑区橋本

## セットアップ
```bash
npm i
npm run dev
```
## 求人の追加
`lib/jobs.ts` の `jobs` に追記。タグは `["寮・社宅あり","N3+"]` など。表示時の「#」は付きません。

## デプロイ（GitHub → Vercel）
push すれば自動ビルド。

## Messenger リンクの設定
`components/JobCard.tsx` の `https://m.me/` を、あなたのFacebookページのメッセンジャーURL（例: `https://m.me/mediflowjp`）に差し替えてください。

## カスタムドメイン（Vercel）
1. Vercel → Project → **Settings → Domains** → **Add**  
2. `mediflow.jp` などのドメインを入力  
3. 指示されたDNSレコードをドメイン管理側に追加（A/AAAA or CNAME）  
4. 緑色チェックが付けば反映完了（SSL自動）
