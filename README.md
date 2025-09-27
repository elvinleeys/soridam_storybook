# Soridam Design System
해당 디자인 시스템은 Soridam 팀이 Sorisoop프로젝트를 위해 NextJS, Typescript, TailwindCSS를 활용하여 제작되었습니다.

## 📖 Table of Contents
- [Storybook](#storybook)
- [Project Structure](#-project-structure)
- [Tech Stack](#tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Update](#update)

## Storybook
storybook : [https://68b18c520a82ac63f9524bc5-rueqmotjmh.chromatic.com/?path=/docs/configure-your-project--docs]


## 📂 Project Structure

```bash
soridam-design-system/
├── src/
│   ├── design-system/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── index.ts
│   │   └── ...
│   ├── globals.css
│   └── index.ts
├── scripts/
│   └── generate-components.ts
├── tsup.config.ts
├── package.json
└── README.md
```


## Tech Stack
### Language
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Framework
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

### Styling
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### Components & Chart
![Recharts](https://img.shields.io/badge/Recharts-FF4F00?style=for-the-badge&logo=Recharts&logoColor=white)
![React Circular Progressbar](https://img.shields.io/badge/React_Circular_Progressbar-FF2C2C?style=for-the-badge)

### Build & Bundler
![tsup](https://img.shields.io/badge/tsup-000000?style=for-the-badge&logo=webpack&logoColor=white)

### Documentation & Storybook
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Chromatic](https://img.shields.io/badge/Chromatic-FF4785?style=for-the-badge&logo=chromatic&logoColor=white)


## 📦 Installation

```bash
npm install soridam-design-system
```


## 🚀 Usage
### 1. Import Styles
디자인 시스템의 global style을 적용하기 위해 다음과 같이 import 해야합니다.
```tsx
import "soridam-design-system/styles";
```
tailwindcss 기반으로 제작되었음.

### 2. Import Components
soridam-design-system은 common JS와 ES module을 모두 지원합니다.

- 예시(common JS)
```tsx
import { Button } from "soridam-design-system";

export default function Example() {
  return <Button buttonType="primary" size="large">Click Me</Button>;
}
```


## Update
- **2025.09.03**
1. 빌드 시 Node.js 메모리 부족으로 인한 Entry point 하나로 간략화

2. 빌드 산출물과 package.json에 명시된 파일들의 경로 mismatch로 인한 업데이트

3. root의 index.ts에서의 경로 인식 문제와 build 결과물이 require로 명시됨에 따라 bundler 설정을 esm으로만 진행하도록 변경


- **2025.09.08**
Button 컴포넌트를 여러번 재사용함에 따라 forwardRef를 활용하여 button 태그에 ref 적용

- **2025.09.10**
1. OneLineInput 컴포넌트의 textarea태그에 외부 props를 받도록 설정
2. style 조정 및 label의 htmlFor 속성 사용
3. Button 컴포넌트의 disabled 속성 type 추가
4. OneLineInput 컴포넌트의 onFocus 속성 type 추가

- **2025.09.11**
1. SearchBar의 UI design 동작상 button이 더 적합한 것으로 판단되어, input에서 button으로 교체
2. NavItem의 활성화 판단여부에 startsWith를 사용하여 다른 경로로 이동해도 기본경로의 NavItem이 활성화되는 사례가 발생함에 따라 로직을 변경

- **2025.09.15**
Sign-up 페이지의 stepIndicator에 자연스러운 animation 효과를 위해 framer-motion 도입

- **2025.09.19**
EmailInput 및 PWInput 컴포넌트의 type에 `InputHTMLAttributes<HTMLInputElement>` 추가

- **2025.09.27**
1. ExpandedBottomSheet의 main 태그의 padding 변경
2. ExpandedBottomSheet의 overlay items-end 속성 제거