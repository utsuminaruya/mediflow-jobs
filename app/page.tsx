"use client";
import { useMemo, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import RegionSelector from "@/components/RegionSelector";
import Filters from "@/components/Filters";
import JobCard from "@/components/JobCard";
import { jobs } from "@/lib/jobs";
import { uiText, type Lang } from "@/lib/i18n";

type Selection = { type: "major" | "region" | null; value: string | null; label?: string };

export default function Page() {
  const [lang, setLang] = useState<Lang>("ja");
  const t = uiText(lang);
  const [kw, setKw] = useState("");
  const [sel, setSel] = useState<Selection>({ type: null, value: null });

  const filtered = useMemo(() => {
    const key = kw.trim().toLowerCase();
    return jobs.filter(j => {
      const matchesKeyword =
        !key ||
        j.title_ja.toLowerCase().includes(key) ||
        j.title_vi.toLowerCase().includes(key) ||
        j.description_ja.toLowerCase().includes(key) ||
        j.description_vi.toLowerCase().includes(key) ||
        j.tags.some(tag => tag.toLowerCase().includes(key)) ||
        j.salary.toLowerCase().includes(key) ||
        j.visa.toLowerCase().includes(key) ||
        j.language.toLowerCase().includes(key);

      const matchesSelection = !sel.type ? true :
        sel.type === "major" ? j.prefecture === sel.value :
        j.region === sel.value;

      return matchesKeyword && matchesSelection;
    });
  }, [kw, sel]);

  return (
    <main>
      <header className="container py-6 flex items-center gap-4">
        <div className="flex-1">
          <div className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="Mediflow" className="w-10 h-10 rounded-2xl object-cover" />
            <div>
              <h1 className="text-xl font-bold text-medical-800">Mediflow Jobs</h1>
              <p className="text-sm opacity-75">{t.subtitle}</p>
            </div>
          </div>
        </div>
        <LanguageToggle onChange={setLang} />
        <a href="mailto:mediflow1002@gmail.com" className="btn btn-primary ml-2">{t.cta_contact}</a>
      </header>

      <section className="container grid gap-4">
        <div className="card">
          <h2 className="text-lg font-semibold mb-3">{t.filters}</h2>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="md:col-span-2">
              <Filters placeholder={t.search_placeholder} onChange={setKw} />
            </div>
            <div className="md:col-span-1">
              <RegionSelector onChange={setSel} texts={{ major_areas: t.major_areas, regions: t.regions, clear: t.clear }} />
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {filtered.length === 0 && <div className="card">{t.no_results}</div>}
          {filtered.map(job => <JobCard key={job.id} job={job} lang={lang} />)}
        </div>
      </section>

      <footer className="container py-10 text-sm opacity-80">
        <div className="card">
          <p>{t.footer_note}</p>
        </div>
      </footer>
    </main>
  );
}
