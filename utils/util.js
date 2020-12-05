export const sortedListToAlpha = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => a.name < b.name ? -1 : 0);
}

export const sortedListToPopularity = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => a.score > b.score ? -1 : 0);
}

export const sortedListToPrice = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => a.price < b.price ? -1 : 0);
}