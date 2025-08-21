# Mediflow Jobs (JP/VI)

明るい医療系カラーの**超シンプル**求人サイト。日本語/ベトナム語ワンタップ切替、**主要エリア（東京・神奈川 など）** と **地域（四国・東北 など）** の2段階ロケーションで直感検索。

## 特徴
- Next.js + Tailwind CSS（Vercelデプロイ最適化）
- 日本語/ベトナム語のUIテキスト切替（ローカル保存）
- キーワード検索（職種、Nレベル、タグ、給与などを横断検索）
- 主要エリアと地域セレクタ
- 求人カードは電話/メールのCTA付き（042-716-0218 / mediflow1002@gmail.com）
- 余計な装飾や「独自ポイント」等の余談は一切なし。**求人に集中**

## セットアップ
```bash
npm i
npm run dev
# http://localhost:3000
```

## 求人の追加方法（コピペ運用）
`lib/jobs.ts` の `jobs` 配列に追記します。**UI上には何も表示されません（運用者向けルール）。**

例：
```ts
{
  id: "your-id-001",
  title_ja: "介護スタッフ（特定技能）",
  title_vi: "Nhân viên điều dưỡng (Tokutei Ginou)",
  description_ja: "仕事内容（日本語）…",
  description_vi: "Mô tả công việc (tiếng Việt)…",
  prefecture: "Kanagawa", // 「majorAreas」のIDを使うとフィルタが効きます
  region: "Kanto",        // 「regions」のIDを使うと地域フィルタが効きます
  visa: "特定技能",
  language: "N3",
  salary: "月給 230,000〜270,000円",
  tags: ["寮・社宅あり","土日休み"]
}
```

- `prefecture` は `lib/regions.ts` の `majorAreas` にあるID（Tokyo, Kanagawa, Osaka...）を使うと主要エリアフィルタにヒットします。
- `region` は `regions` のID（Shikoku, Tohoku など）を使います。
- 文字は**日本語/ベトナム語それぞれ**入れておくと切替時に美しく表示されます。

## GitHub への公開
```bash
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## Vercel へデプロイ
1. https://vercel.com にログイン
2. **New Project** → GitHub リポジトリを選択
3. Framework は **Next.js**（自動検出）
4. Environment は特に不要（静的）
5. Deploy を押せば完了

## カラーポリシー（医療系で明るめ）
Tailwind の `medical` / `mint` を用意しています。`globals.css` とコンポーネントで軽く使っています。必要に応じて `text-medical-700` などを活用してください。

---

運営: メディフロー株式会社 / 電話 042-716-0218 / メール mediflow1002@gmail.com
