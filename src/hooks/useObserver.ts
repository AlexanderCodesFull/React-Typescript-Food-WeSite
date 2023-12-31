import { useEffect, useRef } from "react";

export type refType = HTMLElement | HTMLDivElement | null;

export const useObserver = () => {
  const elRef = useRef<refType[] | []>([]);

  useEffect(() => {
    if (!elRef) return;
    const cb = (entries: IntersectionObserverEntry[]) => {
      const el = entries[0];
      el.isIntersecting
        ? el.target.classList.add("fade-in")
        : el.target.classList.remove("fade-in");
    };
    const observer = new IntersectionObserver(cb, { threshold: 0.2 });
    elRef.current && elRef.current.forEach((el) => observer.observe(el!));
    return () => {
      elRef.current && observer.disconnect();
    };
  }, [elRef]);

  //functions
  const addElement = (el: refType) => {
    elRef.current = [...elRef.current, el];
  };

  return { addElement };
};
