import { useState } from "react";

export default function ImageSearch({
  setTerm,
  placeholder = "Search Images...",
}) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setText(text);
    setTerm(text.trim().replace(" ", "+"));
    // console.log("검색어 :", text);
  };
  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl mx-auto">
      <div
        className="p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 
        shadow-[0_0_25px_rgba(59,130,246,0.35)]"
      >
        <div
          className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 
          text-slate-200 focus-within:bg-slate-900/95 transition-colors"
        >
          {/* 왼쪽 아이콘 */}
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </div>

          {/* 입력 */}
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none focus:outline-none text-sm 
            placeholder:text-slate-500"
          />

          {/* 오른쪽 단축키 뱃지 느낌 */}
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400">
            <span className="px-1.5 py-0.5 rounded-md border border-slate-600/80 bg-slate-800">
              ⌘
            </span>
            <span className="px-1.5 py-0.5 rounded-md border border-slate-600/80 bg-slate-800">
              K
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
