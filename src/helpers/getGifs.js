export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=FQSb1XrEtYEkwpIaN1C9XnXxhR8XfaQW`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifts =data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifts
}