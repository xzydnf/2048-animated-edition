import { useEffect } from "react";

export default function useEvent(e, h, p = false) {
  useEffect(() => {
    window.addEventListener(e, h, p);
    return function cleanUp() {
      window.addEventListener(e, h, p);
    };
  });
}
