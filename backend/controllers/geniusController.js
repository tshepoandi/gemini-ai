import genius from 'genius-lyrics'

const Client = new genius.Client(process.env.GENUIS_API_KEY)

const searchController = async(req, res) => {
    const searches = await Client.songs.search("faded");

    // Pick first one
    const everysearch = searches;
    console.log("About the Song:\n", everysearch, "\n");
    res.status(200).json({
        search: everysearch
    })
}

export default searchController