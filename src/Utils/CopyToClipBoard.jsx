import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

const CopyToClipBoard = ({ textToCopy ,Top}) => {
  const [isCopied, setIsCopied] = useState(true);

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
    <button onClick={handleCopy} className= {`absolute z-20 right-1 ${Top ?" top-14" : ""} md:hover:bg-Border   lg:size-8 size-7 rounded-md transition-colors ease-in duration-300 `}>
      {isCopied ? (
        <Copy className="mx-auto  text-Logo transition-colors ease-in duration-300" />
      ) : (
        <CopyCheck className="mx-auto  text-Logo transition-colors ease-in duration-300" />
      )}
    </button>
  );
};

export default CopyToClipBoard;
