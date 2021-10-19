const uuid_generator = (length: number) => {
    if (!length) {
        throw new Error('No length for the uuid')
    }

    if (isNaN(length)) {
        throw new Error('Length should be a number')
    }

    const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,0]
    const uuidList = []

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * ints.length)
        const randomInt = ints[randomIndex]
        uuidList.push(randomInt)
    }

    return uuidList.join('')
}

export { uuid_generator }