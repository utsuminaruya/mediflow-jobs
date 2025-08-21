"use client";
import { useState } from "react";
export default function Filters({ placeholder, onChange }:{placeholder:string; onChange:(kw:string)=>void}){
  const [kw, setKw] = useState("");
  return <div className="card flex items-center gap-3">
    <input value={kw} onChange={(e)=>{ setKw(e.target.value); onChange(e.target.value); }}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-medical-200 px-4 py-3.5 text-base outline-none focus:border-medical-400 bg-white" />
  </div>;
}
