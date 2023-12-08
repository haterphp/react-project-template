const promiseSleep = async (callback: () => void, timeout = 1000): Promise<void> => {
    return new Promise((res) => {
        setTimeout(res, timeout)
    }).then(callback)
}

export { promiseSleep }