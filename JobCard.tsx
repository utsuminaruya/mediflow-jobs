"use client";
import type { Job } from "@/lib/jobs";
import type { Lang } from "@/lib/i18n";
import { truncate } from "@/lib/text";
export default function JobCard({ job, lang }: { job: Job; lang: Lang }){
  const title = lang==="ja"? job.title_ja : job.title_vi;
  const desc = lang==="ja"? job.description_ja : job.description_vi;
  return (
    <article className="card">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm opacity-80 mb-2">{truncate(desc, 120)}</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="badge">📍 {job.prefecture}</span>
            <span className="badge">💴 {job.salary}</span>
            <span className="badge">🛂 {job.visa}</span>
            <span className="badge">🗣 {job.language}</span>
            {job.tags.map(t => <span key={t} className="badge">{t}</span>)}
          </div>
        </div>
        <div className="flex gap-2 sm:flex-col">
          <a href="tel:0427160218" className="btn btn-primary">電話</a>
          <a href="mailto:mediflow1002@gmail.com" className="btn btn-ghost">メール</a>
          <a href="https://lin.ee/1Q4fYRt" target="_blank" rel="noreferrer" className="btn btn-ghost">LINE</a>
          <a href="https://m.me/" target="_blank" rel="noreferrer" className="btn btn-ghost">Messenger</a>
        </div>
      </div>
    </article>
  );
}
