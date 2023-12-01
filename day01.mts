#!/usr/bin/env bun run

export function outputForLine(line: string): number {
    const m = line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g)
    const allNumbers = Array.from(m).flat().map(n => {
        switch (n) {
            case "one": return 1;
            case "two": return 2;
            case "three": return 3;
            case "four": return 4;
            case "five": return 5;
            case "six": return 6;
            case "seven": return 7;
            case "eight": return 8;
            case "nine": return 9;
            default: return Number(n);
        }
    }).filter(n => Number.isInteger(n) && n)

    if (!allNumbers.length || allNumbers.some(n => Number.isNaN(n))) {
        throw new Error(`Invalid or no numbers found in line: ${line}. Extracted numbers: ${allNumbers}`);
    }

    const firstNumber = allNumbers.shift();
    const lastNumber = allNumbers.pop() || firstNumber // if there's only one number, use it twice

    const out = Number(firstNumber + "" + lastNumber)
    if (Number.isNaN(out)) {
        throw new Error(`Unable to form a valid number from the first and last numbers in line: ${line}`);
    }
    return out;
}

export async function processInput(file: string) {
    const input = await Bun.file(file).text()
    const inputLines = input.split("\n")
    const outputLines: number[] = inputLines.map(line => {
        return outputForLine(line)
    });

    const sum = outputLines.reduce((a, b) => a + b, 0);
    if (Number.isNaN(sum)) {
        throw new Error("Sum is NaN");
    }
    return sum;
}

const sum = await processInput("day01-input.txt");
console.log(sum);