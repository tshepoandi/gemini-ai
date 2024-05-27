import genius from 'genius-lyrics'

const Client = new genius.Client(process.env.GENUIS_API_KEY)

const searchController = async(req, res) => {
    try {
        const searches = await Client.songs.search(req.body.search);
        const responseData = searches.map(song => ({
            id: song.id,
            title: song.title,
            artist: song.artist.name,
            url: song.url,
            thumbnail: song.thumbnail
        }));
        res.status(200).json(responseData);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default searchController