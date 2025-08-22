"use client";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
export default function LanguageToggle({ onChange }: { onChange: (lang: Lang) => void }) {
  const [lang, setLang] = useState<Lang>("ja");
  useEffect(()=>{ const s = localStorage.getItem("lang") as Lang | null; if(s){ setLang(s); onChange(s);} },[onChange]);
  const set = (l:Lang)=>{ setLang(l); localStorage.setItem("lang", l); onChange(l); };
  return (
    <div className="inline-flex rounded-2xl bg-white border border-medical-200 overflow-hidden">
      <button className={`px-3 py-1.5 text-sm ${lang==="ja"?"bg-medical-500 text-white":"text-medical-700"}`} onClick={()=>set("ja")}>日本語</button>
      <button className={`px-3 py-1.5 text-sm ${lang==="vi"?"bg-medical-500 text-white":"text-medical-700"}`} onClick={()=>set("vi")}>Tiếng Việt</button>
    </div>
  );
}
