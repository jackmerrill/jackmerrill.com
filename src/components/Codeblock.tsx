import { CopyIcon } from "@radix-ui/react-icons";
import { CopyCheckIcon } from "lucide-react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({
  node,
  inline,
  className,
  children,
  ...props
}: {
  node: any;
  inline: any;
  className: any;
  children: any;
  props: any;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <div className="relative">
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        showLineNumbers
        wrapLongLines
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
      <button
        className="absolute p-1 text-white bg-gray-700 rounded-md top-2 right-2 hover:bg-gray-600"
        onClick={handleCopyClick}
      >
        {isCopied ? (
          <CopyCheckIcon className="w-5 h-5" />
        ) : (
          <CopyIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default CodeBlock;
