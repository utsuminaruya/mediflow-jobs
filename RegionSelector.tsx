"use client";
import { useState } from "react";
import { majorAreas, regions } from "@/lib/regions";
type Props={ onChange:(s:{type:"major"|"region"|null; value:string|null; label?:string})=>void; texts:{major_areas:string;regions:string;clear:string} };
export default function RegionSelector({ onChange, texts }: Props){
  const [tab, setTab] = useState<"major"|"region">("major");
  const [selected, setSelected] = useState<{type:"major"|"region"|null; value:string|null; label?:string}>({type:null,value:null});
  const handle=(type:"major"|"region", value:string, label?:string)=>{ const sel={type,value,label}; setSelected(sel); onChange(sel); };
  const clear=()=>{ const sel={type:null,value:null as any,label:undefined}; setSelected(sel); onChange(sel); };
  return <div className="card">
    <div className="flex items-center gap-2 mb-3">
      <button className={`btn ${tab==="major"?"btn-primary":"btn-ghost"}`} onClick={()=>setTab("major")}>{texts.major_areas}</button>
      <button className={`btn ${tab==="region"?"btn-primary":"btn-ghost"}`} onClick={()=>setTab("region")}>{texts.regions}</button>
      <button className="ml-auto btn btn-ghost" onClick={clear}>{texts.clear}</button>
    </div>
    {tab==="major"?
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {majorAreas.map(a=>(<button key={a.id} className={`btn ${selected.type==="major"&&selected.value===a.id?"btn-primary":"btn-ghost"}`} onClick={()=>handle("major",a.id,a.label)}>{a.label}</button>))}
      </div>:
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {regions.map(r=>(<button key={r.id} className={`btn ${selected.type==="region"&&selected.value===r.id?"btn-primary":"btn-ghost"}`} onClick={()=>handle("region",r.id,r.ja)}>{r.ja}</button>))}
      </div>}
  </div>;
}
