export default function Button({
  rainbow = false,
  link = false,
  href,
  children,
}: {
  rainbow?: boolean;
  link?: boolean;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {rainbow ? (
        <div className="rainbow-btn">
          {link ? (
            <a
              href={href}
              className="px-3 py-3 font-bold text-black rounded-md bg-slate-400 dark:text-white dark:bg-gray-800"
            >
              {children}
            </a>
          ) : (
            <button className="px-3 py-2 font-bold text-black rounded-md bg-slate-400 dark:text-white dark:bg-gray-800">
              {children}
            </button>
          )}
        </div>
      ) : link ? (
        <a
          href={href}
          className="px-3 py-3 font-bold text-black rounded-md bg-slate-400 dark:text-white dark:bg-gray-800"
        >
          {children}
        </a>
      ) : (
        <button className="px-3 py-2 font-bold text-black rounded-md bg-slate-400 dark:text-white dark:bg-gray-800">
          {children}
        </button>
      )}
    </>
  );
}
