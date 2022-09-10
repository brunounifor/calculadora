export function division (a, b) {
    let c = parseFloat(a)
    let d = parseFloat(b)
    let result = c / d
    return result.toPrecision(8);
}