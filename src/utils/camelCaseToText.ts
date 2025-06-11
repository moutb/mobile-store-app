/**
 * Converts a camelCase word into a space-separated text.
 * Example: "mainCamera" => "Main Camera"
 * @param text - The camelCase string to convert.
 * @returns The string with spaces and capitalized first letter.
 */
export function camelCaseToText(text: string): string {
    return text
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/^./, (str) => str.toUpperCase());
}
