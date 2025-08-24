"use client";
import { useState } from "react";
import Link from "next/link";
import type { Job } from "@/lib/jobs";

type Props = { job: Job; lang: "ja" | "vi" };

export default function JobCard({ job, lang }: Props) {
  const [open, setOpen] = useState(false);

  const title = lang === "ja" ? job.title_ja : job.title_vi;
  const desc = lang === "ja" ? job.description_ja : job.description_vi;

  // カード内表示用：折りたたみ（初期は短く、クリックで全開）
  const short = desc.length > 160 ? desc.slice(0, 160) + "…" : desc;

  return (
    <article className="card flex gap-4">
      <div className="flex-1 min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold mb-1">{title}</h3>

        {/* ★ 省略せず読める：トグルで全文 */}
        <p className="text-sm leading-6 whitespace-pre-line">
          {open ? desc : short}
        </p>
        {desc.length > 160 && (
          <button
            onClick={() => setOpen(v => !v)}
            className="mt-1 text-medical-700 hover:underline text-sm"
          >
            {open ? (lang === "ja" ? "閉じる" : "Đóng") : (lang === "ja" ? "続きを読む" : "Xem thêm")}
          </button>
        )}

        {/* メタ情報 */}
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="badge">📍 {job.prefecture}</span>
          <span className="badge">💴 {job.salary}</span>
          <span className="badge">🪪 {job.visa}</span>
          <span className="badge">🗣 {job.language}</span>
          {job.tags.map(t => (
            <span className="badge" key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* 右側のアクション列 ＋ 詳細ページの導線 */}
      <div className="w-32 shrink-0 flex flex-col gap-3 items-stretch">
        <a href="tel:0427160218" className="btn btn-primary">電話</a>
        <a href="mailto:mediflow1002@gmail.com" className="btn">メール</a>
        <a href="https://lin.ee/1Q4fYRt" className="btn">LINE</a>
        <a href="https://m.me/" className="btn">Messenger</a>

        {/* ★ 追加：求人詳細ページへ */}
        <Link
          href={`/job/${job.id}`}
          className="btn btn-outline"
          prefetch
        >
          {lang === "ja" ? "詳細を見る" : "Xem chi tiết"}
        </Link>
      </div>
    </article>
  );
}
