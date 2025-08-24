import Image from "next/image";
import Link from "next/link";
import { jobs } from "@/lib/jobs";
import LanguageToggle from "@/components/LanguageToggle";
import type { Lang } from "@/lib/i18n";
import { uiText } from "@/lib/i18n";

type PageProps = { params: { id: string }; searchParams: { lang?: Lang } };

export default function JobDetailPage({ params, searchParams }: PageProps) {
  const job = jobs.find(j => j.id === params.id);
  const lang: Lang = (searchParams.lang === "vi" ? "vi" : "ja");
  const t = uiText(lang);

  if (!job) {
    return (
      <main className="container py-10">
        <p className="card">求人が見つかりませんでした。</p>
        <Link href="/" className="btn mt-4">一覧に戻る</Link>
      </main>
    );
  }

  const title = lang === "ja" ? job.title_ja : job.title_vi;
  const desc = lang === "ja" ? job.description_ja : job.description_vi;

  return (
    <main>
      <header className="container py-6 flex items-center gap-4">
        <div className="flex-1 inline-flex items-center gap-3">
          <Image src="/logo.png" alt="Mediflow" width={40} height={40} className="rounded-2xl object-cover" />
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-medical-800">Mediflow Jobs</h1>
        </div>
        <LanguageToggle onChange={(v) => {
          // 言語切替はクエリで反映
          if (typeof window !== "undefined") {
            const url = new URL(window.location.href);
            url.searchParams.set("lang", v);
            window.location.href = url.toString();
          }
        }} />
        <Link href="/" className="btn ml-2">{t.back_to_list}</Link>
      </header>

      <section className="container grid gap-4">
        <article className="card">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
          <div className="mb-3 flex flex-wrap gap-2 text-xs">
            <span className="badge">📍 {job.prefecture}</span>
            <span className="badge">🗺 {job.region}</span>
            <span className="badge">💴 {job.salary}</span>
            <span className="badge">🪪 {job.visa}</span>
            <span className="badge">🗣 {job.language}</span>
            {job.tags.map(t => <span key={t} className="badge">{t}</span>)}
          </div>

          <p className="whitespace-pre-line leading-7">{desc}</p>
        </article>

        {/* 応募・問い合わせボタン（大きめ） */}
        <div className="grid sm:grid-cols-4 gap-3">
          <a href="tel:0427160218" className="btn btn-primary btn-lg">電話</a>
          <a href="mailto:mediflow1002@gmail.com" className="btn btn-lg">メール</a>
          <a href="https://lin.ee/1Q4fYRt" className="btn btn-lg">LINE</a>
          <a href="https://m.me/" className="btn btn-lg">Messenger</a>
        </div>
      </section>

      <footer className="container py-10 text-sm opacity-80">
        <div className="card">
          <p>運営：メディフロー株式会社｜電話：042-716-0218｜メール：mediflow1002@gmail.com｜住所：神奈川県緑区橋本</p>
        </div>
      </footer>
    </main>
  );
}
