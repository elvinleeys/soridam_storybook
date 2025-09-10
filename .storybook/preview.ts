import type { Preview } from '@storybook/nextjs';
import { themes } from 'storybook/theming';
import '../src/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light', color: '#ffffff', default: true },
        { name: 'dark', class: 'dark', color: '#000000' },
      ],
    },
  },
};

export default preview;