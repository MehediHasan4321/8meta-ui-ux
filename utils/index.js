'use client'

export const objToArr = (obj) => {
    return Object.keys(obj)
}


// name:{


// }

export const arrToObj = (arr) => {
    return Object.values(arr).reduce((acc, cur) => {
        acc[cur.name] = {...cur}

        return acc
    }, {})
}