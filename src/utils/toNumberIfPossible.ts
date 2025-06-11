/**
 * Converts a string to a number if possible.
 * Returns undefined if the value is undefined or not a valid number.
 * @param value - The string to convert.
 * @returns The number value or undefined.
 */
export function toNumberIfPossible(
    value: string | undefined,
): number | undefined {
    if (value === undefined) return undefined;
    const num = Number(value);
    return isNaN(num) ? undefined : num;
}
