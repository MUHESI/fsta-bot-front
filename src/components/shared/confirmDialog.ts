export function confirmDialog(message?: string): boolean {
    return confirm(message || "Are you sure to do this action ?");

}