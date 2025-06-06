export function toNumberIfPossible(
    value: string | undefined,
): number | undefined {
    if (value === undefined) return undefined;
    const num = Number(value);
    return isNaN(num) ? undefined : num;
}
