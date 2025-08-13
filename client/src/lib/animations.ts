export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.4, 0.25, 1] 
    } 
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.4, 0.25, 1] 
    } 
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.4, 0.25, 1] 
    } 
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.4, 0.25, 1] 
    } 
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.4, 0.25, 1] 
    } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export const staggerFastContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] 
    } 
  }
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.8
    } 
  }
};

export const scaleOnHover = {
  hover: { 
    scale: 1.05, 
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.4, 0.25, 1]
    } 
  }
};

export const projectCardHover = {
  hover: { 
    y: -10, 
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.4, 0.25, 1] 
    }
  }
};

export const skillBarAnimation = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.4, 0.25, 1],
      delay: 0.5
    }
  })
};

export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotateAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const cardHoverEffect = {
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export const buttonHoverEffect = {
  hover: {
    scale: 1.05,
    y: -2,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.2,
      ease: [0.25, 0.4, 0.25, 1]
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};
