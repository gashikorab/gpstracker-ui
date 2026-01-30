import { alpha } from '@mui/material/styles';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server) => {
  const primary = '#2f7cf6';
  const backgroundDefault = '#f5f7fa';
  const backgroundPaper = '#ffffff';
  const textPrimary = '#1a1a1a';
  const textSecondary = '#475569';

  return {
    mode: 'light',
    background: {
      default: backgroundDefault,
      paper: backgroundPaper,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: validatedColor(server?.attributes?.colorSecondary) || '#16a34a',
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled: '#94a3b8',
    },
    divider: '#e2e8f0',
    action: {
      active: textSecondary,
      hover: alpha(primary, 0.08),
      hoverOpacity: 0.08,
      selected: alpha(primary, 0.14),
      selectedOpacity: 0.14,
      focus: alpha(primary, 0.12),
      focusOpacity: 0.12,
      disabled: '#cbd5f5',
      disabledBackground: '#edf2ff',
    },
    neutral: {
      main: '#64748b',
    },
  geometry: {
    main: '#3bb2d0',
  },
  alwaysDark: {
      main: '#0f172a',
    },
  };
};
