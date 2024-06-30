import assert from 'assert';
import colorUtils from './dist/index.js';

describe('Color Utils', () => {
    describe('hexToRgba()', () => {
        it('should convert #FFFFFF to rgba(255, 255, 255, 1)', () => {
            assert.strictEqual(colorUtils.hexToRgba('#FFFFFF'), 'rgba(255, 255, 255, 1)');
        });

        it('should handle shorthand hex codes like #FFF', () => {
            assert.strictEqual(colorUtils.hexToRgba('#FFF'), 'rgba(255, 255, 255, 1)');
        });

        it('should handle hex codes without hash like "FFF"', () => {
            assert.strictEqual(colorUtils.hexToRgba('FFF'), 'rgba(255, 255, 255, 1)');
        });

        it('should return black for invalid hex codes', () => {
            assert.strictEqual(colorUtils.hexToRgba('ZZZ'), 'rgba(0, 0, 0, 1)');
        });

        it('should handle alpha values correctly', () => {
            assert.strictEqual(colorUtils.hexToRgba('#FF5733', 0.5), 'rgba(255, 87, 51, 0.5)');
        });

        it('should default to alpha 1 if not specified', () => {
            assert.strictEqual(colorUtils.hexToRgba('#FF5733'), 'rgba(255, 87, 51, 1)');
        });

        it('should process lowercase hex codes correctly', () => {
            assert.strictEqual(colorUtils.hexToRgba('#ff5733'), 'rgba(255, 87, 51, 1)');
        });

        it('should return black for empty strings', () => {
            assert.strictEqual(colorUtils.hexToRgba(''), 'rgba(0, 0, 0, 1)');
        });

        it('should handle whitespace in input', () => {
            assert.strictEqual(colorUtils.hexToRgba(' #fff '), 'rgba(255, 255, 255, 1)');
        });
    });
});
