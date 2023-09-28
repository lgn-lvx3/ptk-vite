export function classNames(...classes: unknown[]): string {
    return classes.filter(Boolean).join(" ")
}

export function getUniqueNumber(): number {
    const randomNumber = Math.floor(Math.random() * 1000000000)
    return randomNumber
}
