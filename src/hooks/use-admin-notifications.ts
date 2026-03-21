import { useEffect, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

const NOTIFICATION_SOUND_URL = "data:audio/wav;base64,UklGRl9vT19teleVhVkUwAAAAEACAABAAIAAgAIABAABAgA";

// Simple beep using Web Audio API
const playBeep = () => {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 660;
    gain.gain.value = 0.15;
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch {
    // Audio not available
  }
};

const requestPermission = async () => {
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;
  const result = await Notification.requestPermission();
  return result === "granted";
};

const showBrowserNotification = (title: string, body: string) => {
  if (Notification.permission === "granted") {
    try {
      new Notification(title, {
        body,
        icon: "/placeholder.svg",
        tag: "admin-notification",
      });
    } catch {
      // Notification failed
    }
  }
};

export const useAdminNotifications = () => {
  const unreadCountRef = useRef(0);
  const hasPermission = useRef(false);

  useEffect(() => {
    requestPermission().then((granted) => {
      hasPermission.current = granted;
    });
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("admin-global-notifications")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chat_messages" },
        (payload) => {
          const msg = payload.new as { sender_type: string; content: string };
          if (msg.sender_type === "visitor") {
            playBeep();
            showBrowserNotification("New Chat Message", msg.content?.slice(0, 100) || "New message");
            unreadCountRef.current += 1;
          }
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "section_comments" },
        (payload) => {
          const comment = payload.new as { author_name: string; content: string; section: string };
          playBeep();
          showBrowserNotification(
            `New Comment on ${comment.section}`,
            `${comment.author_name}: ${comment.content?.slice(0, 100)}`
          );
          unreadCountRef.current += 1;
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const resetUnread = useCallback(() => {
    unreadCountRef.current = 0;
  }, []);

  return { resetUnread };
};
