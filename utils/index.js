export const arrToObj = (arr=[]) => {
    return arr.reduce((acc, curr) => {
        acc[curr.name] = {
            ...curr
        }
        return acc
    }, {})
}