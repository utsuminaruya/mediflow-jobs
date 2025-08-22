"use client";
export default function MobileQuickBar(){
  return (
    <nav className="sticky-mobile-bar safe-bottom">
      <div className="mx-auto max-w-6xl px-3 pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-4 gap-2 bg-white/95 backdrop-blur rounded-t-2xl border border-medical-200 shadow-soft p-2">
          <a href="tel:0427160218" className="btn btn-ghost btn-lg">電話</a>
          <a href="mailto:mediflow1002@gmail.com" className="btn btn-ghost btn-lg">メール</a>
          <a href="https://lin.ee/1Q4fYRt" target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">LINE</a>
          <a href="https://m.me/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">Messenger</a>
        </div>
      </div>
    </nav>
  );
}
