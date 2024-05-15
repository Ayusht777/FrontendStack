import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

const CopyToClipBoard = ({ textToCopy, placement = true }) => {
  const [isCopied, setIsCopied] = useState(true);
  const Classes = "hover:text-[#71717A] size-5";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(false);
      setTimeout(() => setIsCopied(true), 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`absolute
        ${
          placement
            ? " z-0 right-2 mt-2 md:hover:bg-Border lg:size-8 size-7 rounded-md"
            : "right-2"
        }
        transition-colors ease-in duration-300`}
    >
      {isCopied ? (
        <Copy
          className={`${
            !placement && Classes
          } mx-auto text-Logo transition-colors ease-in duration-300`}
        />
      ) : (
        <CopyCheck
          className={`${
            !placement && Classes
          } mx-auto text-Logo transition-colors ease-in duration-300`}
        />
      )}
    </button>
  );
};

export default CopyToClipBoard;
