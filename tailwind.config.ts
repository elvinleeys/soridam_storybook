import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  // 파일 감시 경로 (이전의 purge 역할)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // 다크 모드 설정 ('media'는 시스템 설정을 따름, 'class'는 클래스 토글)
  darkMode: 'class', 
  theme: {
    extend: {
      // 폰트 패밀리 설정
      fontFamily: {
        Pretendard: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
      // 폰트 사이즈
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5rem', letterSpacing: '0px' }], // 12px -> 0.75rem, 140% -> 1.5rem
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0px' }], // 14px -> 0.875rem, 20px -> 1.25rem
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0px' }], // 16px -> 1rem, 24px -> 1.5rem
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0px' }], // 18px -> 1.125rem, 28px -> 1.75rem
        'xl': ['1.25rem', { lineHeight: '1.25rem', letterSpacing: '0px' }], // 20px -> 1.25rem, 20px -> 1.25rem
      },
      // 폰트 두께
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      // 색상
      colors: {
        'neutral_black': '#060606',
        'primary_blue': '#007BFF',
        'primary_red': '#FF3131',
        'neutral_gray': '#7B7B7B',
        'sub_gray': '#6D6D6D',
        'dark_gray': '#2A2A2A',
        'light_black': '#0000008A',
      },
    },
  },
  // 플러그인
  plugins: [],
};

export default config;