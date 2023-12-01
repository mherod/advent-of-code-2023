import { outputForLine, processInput } from './day01.mts';

describe('processInput', () => {
    it('should get correct number for test data', async () => {
        const result = await processInput('day01-test.txt');
        expect(result).toBe(281);
    });
});

describe('outputForLine', () => {
    it('should correctly process "two1nine" to 29', () => {
        const result = outputForLine('two1nine');
        expect(result).toBe(29);
    });

    it('should correctly process "eightwothree" to 83', () => {
        const result = outputForLine('eightwothree');
        expect(result).toBe(83);
    });

    it('should correctly process "abcone2threexyz" to 13', () => {
        const result = outputForLine('abcone2threexyz');
        expect(result).toBe(13);
    });

    it('should correctly process "xtwone3four" to 24', () => {
        const result = outputForLine('xtwone3four');
        expect(result).toBe(24);
    });

    it('should correctly process "4nineeightseven2" to 42', () => {
        const result = outputForLine('4nineeightseven2');
        expect(result).toBe(42);
    });

    it('should correctly process "zoneight234" to 14', () => {
        const result = outputForLine('zoneight234');
        expect(result).toBe(14);
    });

    it('should correctly process "7pqrstsixteen" to 76', () => {
        const result = outputForLine('7pqrstsixteen');
        expect(result).toBe(76);
    });

    it('should correctly process "pxjcgc2ggqscglhjpbpr6seven" to 27', () => {
        const result = outputForLine('pxjcgc2ggqscglhjpbpr6seven');
        expect(result).toBe(27);
    });

    it('should correctly process "gkvoneight29two" to 12', () => {
        const result = outputForLine('gkvoneight29two');
        expect(result).toBe(12);
    });

    it('should correctly process "eightwo" to 82', () => {
        const result = outputForLine('eightwo');
        expect(result).toBe(82);
    });

    it('should correctly process "5two1sixsevenjpgnbvjpcgd1eightwoh" to 52', () => {
        const result = outputForLine('5two1sixsevenjpgnbvjpcgd1eightwoh');
        expect(result).toBe(52);
    });

    it('should correctly process "4gnvxkc" to 4', () => {
        const result = outputForLine('4gnvxkc');
        expect(result).toBe(44);
    });

    it('should correctly process "9threetwosix" to 96', () => {
        const result = outputForLine('9threetwosix');
        expect(result).toBe(96);
    });

    it('should correctly process "seven1fourbvmfzftwortnjd16" to 76', () => {
        const result = outputForLine('seven1fourbvmfzftwortnjd16');
        expect(result).toBe(76);
    });

    it('should throw an error for a line with no valid numbers', () => {
        expect(() => outputForLine('abcxyz')).toThrow();
    });
});
