import { useEffect, useState, useCallback } from "react";

const useDocumentTitle = (initialTitle = "FrontendStack") => {
    const [title, setTitle] = useState(initialTitle);

    const handleVisibilityChange = useCallback(() => {
        if (document.visibilityState === 'hidden') {
            setTitle('Come back to FrontendStack!');
        } else {
            setTitle(initialTitle);
        }
    }, [initialTitle]);

    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [handleVisibilityChange]);

    return title; 
}

export default useDocumentTitle;
