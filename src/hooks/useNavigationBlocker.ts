import { useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import type {IUseNavigationBlockerProps} from "@types"

export const useNavigationBlocker = ({
  shouldBlock,
  onBlock,
}: IUseNavigationBlockerProps) => {
  const location = useLocation();
  const isBlocked = useRef(false);

  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (shouldBlock) {
        e.preventDefault();
        e.returnValue = "Are you sure you want to leave this live meeting?";
        return "Are you sure you want to leave this live meeting?";
      }
    },
    [shouldBlock]
  );

  const handlePopState = useCallback(
    (e: PopStateEvent) => {
      if (shouldBlock && !isBlocked.current) {
        e.preventDefault();
        isBlocked.current = true;
        onBlock?.();
        // Push the current location back to prevent navigation
        window.history.pushState(null, "", location.pathname);
      }
    },
    [shouldBlock, onBlock, location.pathname]
  );

  useEffect(() => {
    if (shouldBlock) {
      window.addEventListener("beforeunload", handleBeforeUnload);
      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [shouldBlock, handleBeforeUnload, handlePopState]);

  const allowNavigation = useCallback(() => {
    isBlocked.current = false;
  }, []);

  return { allowNavigation };
};
