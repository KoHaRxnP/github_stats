export interface Theme {
  name: string;
  displayName: string;
  colors: {
    background: string;
    cardBg: string;
    border: string;
    text: string;
    textSecondary: string;
    accent: string;
    green: string;
    yellow: string;
    purple: string;
    red: string;
    orange: string;
    primary: string;
    secondary: string;
  };
  gradients: {
    score: [string, string];
    background: [string, string];
  };
}

export const themes: Record<string, Theme> = {
  dark: {
    name: 'dark',
    displayName: 'ダーク',
    colors: {
      background: '#0f172a',
      cardBg: '#1e293b',
      border: '#334155',
      text: '#e2e8f0',
      textSecondary: '#94a3b8',
      accent: '#3b82f6',
      green: '#10b981',
      yellow: '#f59e0b',
      purple: '#8b5cf6',
      red: '#ef4444',
      orange: '#f97316',
      primary: '#3b82f6',
      secondary: '#8b5cf6'
    },
    gradients: {
      score: ['#3b82f6', '#8b5cf6'],
      background: ['#0f172a', '#1e293b']
    }
  },
  light: {
    name: 'light',
    displayName: 'ライト',
    colors: {
      background: '#ffffff',
      cardBg: '#f8fafc',
      border: '#e2e8f0',
      text: '#1e293b',
      textSecondary: '#64748b',
      accent: '#3b82f6',
      green: '#059669',
      yellow: '#d97706',
      purple: '#7c3aed',
      red: '#dc2626',
      orange: '#ea580c',
      primary: '#3b82f6',
      secondary: '#7c3aed'
    },
    gradients: {
      score: ['#3b82f6', '#7c3aed'],
      background: ['#ffffff', '#f8fafc']
    }
  },
  blue: {
    name: 'blue',
    displayName: 'ブルー',
    colors: {
      background: '#0c1222',
      cardBg: '#1a2332',
      border: '#2d3748',
      text: '#e2e8f0',
      textSecondary: '#a0aec0',
      accent: '#4299e1',
      green: '#48bb78',
      yellow: '#ed8936',
      purple: '#9f7aea',
      red: '#f56565',
      orange: '#ff7a00',
      primary: '#4299e1',
      secondary: '#63b3ed'
    },
    gradients: {
      score: ['#4299e1', '#63b3ed'],
      background: ['#0c1222', '#1a2332']
    }
  },
  green: {
    name: 'green',
    displayName: 'グリーン',
    colors: {
      background: '#0a1f0f',
      cardBg: '#1a2e1a',
      border: '#2d4a2d',
      text: '#e6ffea',
      textSecondary: '#9ae6b4',
      accent: '#48bb78',
      green: '#68d391',
      yellow: '#f6e05e',
      purple: '#b794f6',
      red: '#fc8181',
      orange: '#fbb036',
      primary: '#48bb78',
      secondary: '#68d391'
    },
    gradients: {
      score: ['#48bb78', '#68d391'],
      background: ['#0a1f0f', '#1a2e1a']
    }
  },
  purple: {
    name: 'purple',
    displayName: 'パープル',
    colors: {
      background: '#1a0d26',
      cardBg: '#2d1b40',
      border: '#44337a',
      text: '#f7fafc',
      textSecondary: '#d6bcfa',
      accent: '#9f7aea',
      green: '#68d391',
      yellow: '#f6e05e',
      purple: '#b794f6',
      red: '#fc8181',
      orange: '#fbb036',
      primary: '#9f7aea',
      secondary: '#b794f6'
    },
    gradients: {
      score: ['#9f7aea', '#b794f6'],
      background: ['#1a0d26', '#2d1b40']
    }
  },
  ocean: {
    name: 'ocean',
    displayName: 'オーシャン',
    colors: {
      background: '#0a192f',
      cardBg: '#112240',
      border: '#233554',
      text: '#ccd6f6',
      textSecondary: '#8892b0',
      accent: '#64ffda',
      green: '#64ffda',
      yellow: '#ffd700',
      purple: '#c792ea',
      red: '#ff6b6b',
      orange: '#ffb347',
      primary: '#64ffda',
      secondary: '#5ccfe6'
    },
    gradients: {
      score: ['#64ffda', '#5ccfe6'],
      background: ['#0a192f', '#112240']
    }
  },
  sunset: {
    name: 'sunset',
    displayName: 'サンセット',
    colors: {
      background: '#2d1b2e',
      cardBg: '#3e2723',
      border: '#5d4037',
      text: '#ffeaa7',
      textSecondary: '#fab1a0',
      accent: '#fd79a8',
      green: '#00b894',
      yellow: '#fdcb6e',
      purple: '#a29bfe',
      red: '#e84393',
      orange: '#e17055',
      primary: '#fd79a8',
      secondary: '#fdcb6e'
    },
    gradients: {
      score: ['#fd79a8', '#fdcb6e'],
      background: ['#2d1b2e', '#3e2723']
    }
  },
  github: {
    name: 'github',
    displayName: 'GitHub',
    colors: {
      background: '#0d1117',
      cardBg: '#161b22',
      border: '#30363d',
      text: '#f0f6fc',
      textSecondary: '#8b949e',
      accent: '#58a6ff',
      green: '#7c3aed',
      yellow: '#f85149',
      purple: '#a5a5a5',
      red: '#f85149',
      orange: '#ff7b72',
      primary: '#58a6ff',
      secondary: '#7c3aed'
    },
    gradients: {
      score: ['#58a6ff', '#7c3aed'],
      background: ['#0d1117', '#161b22']
    }
  },
  cosmic: {
    name: 'cosmic',
    displayName: 'コズミック',
    colors: {
      background: '#1a0033',
      cardBg: '#2d1b69',
      border: '#4c1d95',
      text: '#ffffff',
      textSecondary: '#c084fc',
      accent: '#8b5cf6',
      green: '#10b981',
      yellow: '#fbbf24',
      purple: '#c084fc',
      red: '#f472b6',
      orange: '#fb923c',
      primary: '#8b5cf6',
      secondary: '#f472b6'
    },
    gradients: {
      score: ['#8b5cf6', '#f472b6'],
      background: ['#4c1d95', '#fb7185']
    }
  },
  neon: {
    name: 'neon',
    displayName: 'ネオン',
    colors: {
      background: '#0a0a0a',
      cardBg: '#1a1a2e',
      border: '#16213e',
      text: '#ffffff',
      textSecondary: '#a8c8ec',
      accent: '#00d4ff',
      green: '#39ff14',
      yellow: '#ffff00',
      purple: '#ff00ff',
      red: '#ff073a',
      orange: '#ff6600',
      primary: '#00d4ff',
      secondary: '#ff00ff'
    },
    gradients: {
      score: ['#667eea', '#764ba2'],
      background: ['#667eea', '#f093fb']
    }
  },
  gradient: {
    name: 'gradient',
    displayName: 'グラデーション',
    colors: {
      background: '#4c1d95',
      cardBg: 'rgba(255, 255, 255, 0.1)',
      border: 'rgba(255, 255, 255, 0.2)',
      text: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.8)',
      accent: '#fbbf24',
      green: '#10b981',
      yellow: '#fbbf24',
      purple: '#c084fc',
      red: '#f472b6',
      orange: '#fb923c',
      primary: '#8b5cf6',
      secondary: '#f472b6'
    },
    gradients: {
      score: ['#fbbf24', '#f472b6'],
      background: ['#667eea', '#764ba2']
    }
  }
  matcha: {
    name: 'matcha',
    displayName: '抹茶モダン',
    colors: {
      background: '#2c351f',
      cardBg: '#3c482b',
      border: '#4c5b37',
      text: '#f4f7f0',
      textSecondary: '#adc19a',
      accent: '#8da871',
      green: '#a3be8c',
      yellow: '#ebcb8b',
      purple: '#b48ead',
      red: '#bf616a',
      orange: '#d08770',
      primary: '#8da871',
      secondary: '#a3be8c'
    },
    gradients: {
      score: ['#8da871', '#a3be8c'],
      background: ['#2c351f', '#3c482b']
    }
  },
  retro: {
    name: 'retro',
    displayName: 'レトロポップ',
    colors: {
      background: '#2b0040',
      cardBg: '#3d005a',
      border: '#ff007f',
      text: '#00f5ff',
      textSecondary: '#ffb7b2',
      accent: '#ff007f',
      green: '#00ffcc',
      yellow: '#fffb00',
      purple: '#bd00ff',
      red: '#ff3366',
      orange: '#ff6600',
      primary: '#ff007f',
      secondary: '#00f5ff'
    },
    gradients: {
      score: ['#ff007f', '#00f5ff'],
      background: ['#2b0040', '#3d005a']
    }
  },
  rose: {
    name: 'rose',
    displayName: 'ローズクォーツ',
    colors: {
      background: '#2d2426',
      cardBg: '#3d3134',
      border: '#5c4b4f',
      text: '#fcefe6',
      textSecondary: '#cca7aa',
      accent: '#e0a899',
      green: '#8fa993',
      yellow: '#e7c07e',
      purple: '#b8a4c9',
      red: '#d98880',
      orange: '#e59866',
      primary: '#e0a899',
      secondary: '#cca7aa'
    },
    gradients: {
      score: ['#e0a899', '#fcefe6'],
      background: ['#2d2426', '#3d3134']
    }
  },
  hacker: {
    name: 'hacker',
    displayName: 'ターミナル',
    colors: {
      background: '#000000',
      cardBg: '#0d0d0d',
      border: '#00ff00',
      text: '#00ff00',
      textSecondary: '#00aa00',
      accent: '#00ff00',
      green: '#33ff33',
      yellow: '#ffff33',
      purple: '#9933ff',
      red: '#ff3333',
      orange: '#ff9933',
      primary: '#00ff00',
      secondary: '#00aa00'
    },
    gradients: {
      score: ['#00aa00', '#00ff00'],
      background: ['#000000', '#0d0d0d']
    }
  }
};

export function getTheme(themeName?: string): Theme {
  if (!themeName || !themes[themeName]) {
    return themes.dark; // デフォルトテーマ
  }
  return themes[themeName];
}

export function getThemeNames(): string[] {
  return Object.keys(themes);
}
