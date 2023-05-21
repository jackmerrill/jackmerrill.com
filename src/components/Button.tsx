export default function Button({
  rainbow,
  children,
}: {
  rainbow: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`${rainbow ? "rainbow-btn" : ""}`}>
      <button className="px-3 py-2 font-bold text-black rounded-md bg-slate-400 dark:text-white dark:bg-gray-800">
        {children}
      </button>
    </div>
  );
}
