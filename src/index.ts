const uuid_generator = (length: number, letters?: boolean) => {
    const uuidList = []

    if (!length) {
        throw new Error('No length for the uuid')
    }

    if (isNaN(length)) {
        throw new Error('Length should be a number')
    }

    if (!letters) letters = false

    if (letters) {
        const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length)
            const randomInt = chars[randomIndex]
        
            uuidList.push(randomInt)
        }
    } else {
        const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,0]

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * ints.length)
            const randomInt = ints[randomIndex]
        
            uuidList.push(randomInt)
        }
    }

    return uuidList.join('')
}

module.exports = uuid_generator