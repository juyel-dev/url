/**
 * Animation Constants and Framer Motion Variants
 * Defines all animation configurations, timing curves, and motion variants
 * Enables consistent micro-interactions throughout the application
 */

import { Variants } from 'framer-motion'

/**
 * Global animation timing and easing configurations
 */
export const ANIMATION_TIMING = {
  /** Extra fast animations (ms) */
  EXTRA_FAST: 150,

  /** Fast animations (ms) */
  FAST: 250,

  /** Standard animations (ms) */
  STANDARD: 300,

  /** Slow animations (ms) */
  SLOW: 500,

  /** Extra slow animations (ms) */
  EXTRA_SLOW: 800,

  /** Very slow animations (ms) */
  VERY_SLOW: 1200,

  /** Page transition (ms) */
  PAGE_TRANSITION: 400,

  /** Modal animation (ms) */
  MODAL: 350,

  /** Tooltip animation (ms) */
  TOOLTIP: 150,

  /** Hover state (ms) */
  HOVER: 200,

  /** Focus state (ms) */
  FOCUS: 200,

  /** Loading animation cycle (ms) */
  LOADING_CYCLE: 1500,

  /** Pulsing animation (ms) */
  PULSE: 2000,

  /** Floating animation (ms) */
  FLOAT: 3000,
} as const

/**
 * Easing curves for different animation types
 */
export const EASING = {
  /** Linear easing - no acceleration */
  LINEAR: 'linear',

  /** Ease in - slow start */
  EASE_IN: 'easeIn',

  /** Ease out - slow end */
  EASE_OUT: 'easeOut',

  /** Ease in-out - slow start and end */
  EASE_IN_OUT: 'easeInOut',

  /** Back easing - overshoot effect */
  BACK: 'backInOut',

  /** Anticipate easing - anticipatory movement */
  ANTICIPATE: 'anticipate',

  /** Elastic easing - bouncy effect */
  ELASTIC: 'easeInOutElastic',

  /** Cubic bezier for custom easing */
  CUBIC_BEZIER: [0.25, 0.46, 0.45, 0.94],

  /** Spring physics */
  SPRING: {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    mass: 1,
  },

  /** Responsive spring */
  RESPONSIVE_SPRING: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    mass: 1,
  },

  /** Bouncy spring */
  BOUNCY_SPRING: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
    mass: 0.5,
  },
} as const

/**
 * Container entrance animations
 */
export const CONTAINER_ENTER: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      ease: 'easeOut',
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
      ease: 'easeIn',
    },
  },
}

/**
 * Item animations for children of staggered containers
 */
export const ITEM_ENTER: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
      ease: 'easeIn',
    },
  },
}

/**
 * Slide up animation
 */
export const SLIDE_UP: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
}

/**
 * Slide down animation
 */
export const SLIDE_DOWN: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
}

/**
 * Slide left animation
 */
export const SLIDE_LEFT: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
}

/**
 * Slide right animation
 */
export const SLIDE_RIGHT: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
}

/**
 * Fade in animation
 */
export const FADE_IN: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
}

/**
 * Scale animation
 */
export const SCALE: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
}

/**
 * Modal/dialog animation
 */
export const MODAL_ANIMATION: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.MODAL / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 10,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
}

/**
 * Button hover animation
 */
export const BUTTON_HOVER: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)',
    transition: {
      duration: ANIMATION_TIMING.HOVER / 1000,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: ANIMATION_TIMING.EXTRA_FAST / 1000,
    },
  },
}

/**
 * Input focus animation
 */
export const INPUT_FOCUS: Variants = {
  rest: {
    borderColor: '#e5e7eb',
    boxShadow: '0 0 0 0 rgba(14, 165, 233, 0)',
  },
  focus: {
    borderColor: '#0ea5e9',
    boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.1)',
    transition: {
      duration: ANIMATION_TIMING.FOCUS / 1000,
    },
  },
}

/**
 * Error shake animation
 */
export const ERROR_SHAKE: Variants = {
  shake: {
    x: [-15, 15, -15, 15, 0],
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
      ease: 'easeInOut',
    },
  },
}

/**
 * Loading spinner animation
 */
export const SPINNER: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: ANIMATION_TIMING.LOADING_CYCLE / 1000,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

/**
 * Pulsing animation
 */
export const PULSE: Variants = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: ANIMATION_TIMING.PULSE / 1000,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * Floating animation
 */
export const FLOAT: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: ANIMATION_TIMING.FLOAT / 1000,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * Shimmer animation for skeleton loading
 */
export const SHIMMER: Variants = {
  animate: {
    backgroundPosition: ['200% center', '-200% center'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

/**
 * Checkmark animation
 */
export const CHECKMARK: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: ANIMATION_TIMING.EXTRA_FAST / 1000,
    },
  },
}

/**
 * Toast notification animation
 */
export const TOAST: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    x: 100,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
      ease: 'easeIn',
    },
  },
}

/**
 * Tooltip animation
 */
export const TOOLTIP: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.TOOLTIP / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 10,
    transition: {
      duration: ANIMATION_TIMING.EXTRA_FAST / 1000,
    },
  },
}

/**
 * Page transition animation
 */
export const PAGE_TRANSITION: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.PAGE_TRANSITION / 1000,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
}

/**
 * Expandable section animation
 */
export const EXPAND: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    marginBottom: 0,
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    marginBottom: 16,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      ease: 'easeOut',
    },
  },
}

/**
 * Backdrop/overlay animation
 */
export const BACKDROP: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: ANIMATION_TIMING.FAST / 1000,
    },
  },
}

/**
 * Success check animation
 */
export const SUCCESS_CHECK: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      ease: 'easeOut',
    },
  },
}

/**
 * Drag animation
 */
export const DRAGGABLE: Variants = {
  rest: {
    cursor: 'grab',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  drag: {
    cursor: 'grabbing',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
}

/**
 * Bounce animation
 */
export const BOUNCE: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: ANIMATION_TIMING.STANDARD / 1000,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * Glow animation for emphasis
 */
export const GLOW: Variants = {
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(14, 165, 233, 0.7)',
      '0 0 0 10px rgba(14, 165, 233, 0)',
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
    }
