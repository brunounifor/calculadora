export function division (a, b) {
    let result = String(eval(`${a} / ${b}`)).substring(0, 15);
    return result;
}