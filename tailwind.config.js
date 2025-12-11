/**
 * Tailwind CSS Configuration
 * =========================
 * This file customizes the default Tailwind CSS theme to match the portfolio's design system.
 * It extends the default configuration with custom colors, fonts, and component styles.
 * 
 * Last Updated: December 2025
 * Author: Niko De Vera
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",                // All HTML files in the root
    "./js/**/*.js"             // All JavaScript files in the js directory
  ],
  theme: {
    extend: {
      // ====================================
      // Color Palette
      // ====================================
      colors: {
        // Primary brand colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',    // Base primary color
          600: '#0284c7',    // Hover state
          700: '#0369a1',    // Active state
          800: '#075985',    // Dark variant
          900: '#0c4a6e',    // Darkest variant
        },
        
        // Secondary color palette
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',    // Base secondary color
          600: '#7c3aed',    // Hover state
          700: '#6d28d9',    // Active state
          800: '#5b21b6',    // Dark variant
          900: '#4c1d95',    // Darkest variant
        },
        
        // Neutral grayscale
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        
        // Success, Warning, Error states
        success: {
          100: '#dcfce7',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          100: '#fef3c7',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          100: '#fee2e2',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },

      // ====================================
      // Typography
      // ====================================
      fontFamily: {
        // Using Inter as the primary font family
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Add a secondary font if needed
        display: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Custom font sizes
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
        '6xl': '3.75rem',     // 60px
      },
      lineHeight: {
        // Custom line heights
        'tight': 1.2,
        'snug': 1.375,
        'normal': 1.5,
        'relaxed': 1.625,
        'loose': 2,
      },

      // ====================================
      // Spacing & Sizing
      // ====================================
      spacing: {
        // Custom spacing scale
        '18': '4.5rem',      // 72px
        '22': '5.5rem',      // 88px
        '26': '6.5rem',      // 104px
        '30': '7.5rem',      // 120px
        '50': '12.5rem',     // 200px
        '72': '18rem',       // 288px
        '84': '21rem',       // 336px
        '96': '24rem',       // 384px
        '128': '32rem',      // 512px
      },

      // ====================================
      // Border Radius
      // ====================================
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',    // 2px
        'DEFAULT': '0.25rem', // 4px
        'md': '0.375rem',    // 6px
        'lg': '0.5rem',      // 8px
        'xl': '0.75rem',     // 12px
        '2xl': '1rem',       // 16px
        '3xl': '1.5rem',     // 24px
        'full': '9999px',
      },

      // ====================================
      // Box Shadow
      // ====================================
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        // Custom shadow for cards
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        // Custom shadow for buttons
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },

      // ====================================
      // Animation & Transitions
      // ====================================
      transitionDuration: {
        'DEFAULT': '300ms',
        '200': '200ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  
  // ====================================
  // Plugins
  // ====================================
  plugins: [
    // Add any Tailwind plugins here
    // Example: require('@tailwindcss/typography'),
    // Example: require('@tailwindcss/forms'),
  ],
  
  // ====================================
  // Variants
  // ====================================
  variants: {
    extend: {
      // Enable hover and focus states for these utilities
      backgroundColor: ['active', 'group-hover'],
      textColor: ['active', 'group-hover'],
      scale: ['group-hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  
  // ====================================
  // Core Plugins
  // ====================================
  corePlugins: {
    // Disable default container to prevent layout issues
    container: false,
  },
}
