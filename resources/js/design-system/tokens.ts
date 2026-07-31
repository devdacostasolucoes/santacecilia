/**
 * Clínica Santa Cecília
 * Design Tokens
 *
 * Fonte única da identidade visual do projecto.
 */

export const colors = {
    primary: {
        50: "#ECFDF5",
        100: "#D1FAE5",
        200: "#A7F3D0",
        300: "#6EE7B7",
        400: "#4FB27F",
        500: "#3D9E6E",
        600: "#2E8760",
        700: "#236C4D",
        800: "#1C5640",
        900: "#164636",
    },

    secondary: {
        50: "#EFF9FD",
        100: "#D8F0FA",
        200: "#B5E5F7",
        300: "#7FD3F0",
        400: "#17A2D4",
        500: "#148DB8",
        600: "#11769A",
        700: "#0D5C77",
        800: "#0B485D",
        900: "#083A4A",
    },

    accent: {
        50: "#FFF8EB",
        100: "#FEEBC6",
        200: "#FDDC98",
        300: "#FCCA63",
        400: "#FBA546",
        500: "#F28C1C",
        600: "#D97112",
        700: "#B5570D",
        800: "#91430D",
        900: "#76380F",
    },

    neutral: {
        white: "#FFFFFF",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        border: "#E5E7EB",

        text: "#1F2937",
        textSecondary: "#6B7280",

        muted: "#94A3B8",
    },

    semantic: {
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#0EA5E9",
    },
} as const;
