export const makePages = (count: number) => {
    const result = []

    for (let i = 1; i <= count; i++) {
        result.push(i)
    }

    return result
}