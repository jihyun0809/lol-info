import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      darkMode: false, // 초기 상태
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })), // 다크 모드 토글 함수
    }),
    {
      name: "theme-storage", // 로컬 스토리지에 저장될 이름
    }
  )
);

export const ToggleDarkModeOnHTML = () => {
  const { darkMode } = useThemeStore();

  // 초기 로드 시 로컬 스토리지의 상태를 HTML에 반영
  useEffect(() => {
    const storedDarkMode = JSON.parse(
      localStorage.getItem("theme-storage") || "{}"
    ).state?.darkMode;
    if (storedDarkMode !== undefined) {
      document.documentElement.classList.toggle("dark", storedDarkMode);
    }
  }, []);

  // 상태 변경 시 HTML 클래스 업데이트
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
};
