import { useEffect, useState } from "react";

export default function useTypingText(
  text,
  typingSpeed = 80,
  deletingSpeed = 50,
  delay = 1500
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayedText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  return displayedText;
}
