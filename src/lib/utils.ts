export type ClassValue = string | number | boolean | undefined | null;

export function cn(...inputs: ClassValue[]): string {
    return inputs.filter(Boolean).join(" ");
}

export function formatMetric(value: number): string {
    return value.toLocaleString("en-US");
}

export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
}
