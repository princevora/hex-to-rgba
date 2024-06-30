type ColorUtils = {
    hexToRgba: (hex: string, alpha?: number) => string;
};

const colorUtils: ColorUtils = {
    hexToRgba: (hex: string, alpha: number = 1): string => {
        // Normalize input (remove whitespace, convert to uppercase)
        hex = hex.trim().toUpperCase();

        // Check if hash is included, if not, consider adding it
        if (!hex.startsWith('#')) {
            hex = '#' + hex;
        }

        // Validate hex code length and characters
        if (!/^#[0-9A-F]{3}([0-9A-F]{3})?$/.test(hex)) {
            console.error("Invalid hex color format.");
            return 'rgba(0, 0, 0, 1)'; // Default to black if invalid
        }

        // Expand shorthand hex code to full form
        if (hex.length === 4) {
            hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        }

        // Parse the RGB values
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        // Return the RGBA string
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
}

export default colorUtils;
