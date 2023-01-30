// pages/api/data.js
import axios from 'axios';
const APIKEY = process.env.APIKEY;
export default async (req, res) => {
    if (req.method === 'POST') {
        const keyword = req.body.cari;
        const uri = `https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&language=id-ID&query=${keyword}&page=1&include_adult=false`;
        const dataMovie = await axios.get(uri);
        let ress = {
            type: "API",
            status: false,
            judul: 'Tidak Ditemukan',
            deskripsi: 'Tidak Ditemukan',
            tahun: '',
            rating: '',
            imageUrl: '',
        }
        if (dataMovie.status === 200 && dataMovie.data.results.length > 0) {
            let data = dataMovie.data.results[0];
            ress.status = true;
            ress.judul = data.title;
            ress.deskripsi = data.overview;
            ress.tahun = data.release_date;
            ress.rating = data.vote_average;
            ress.imageUrl = process.env.IMAGE_URL + data.poster_path;
        }
        res.status(200).json(ress);
    } else {
        // Metode bukan POST, kirimkan pesan error
        res.status(405).json({ message: 'Method not allowed' })
    }
}


