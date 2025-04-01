import { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function Hero() {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    const [movieList, setMovieList] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPopularMovies = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await GlobalApi.getPopularMovies();
            if (response.data && response.data.results) {
                setMovieList(response.data.results[0]);
            } else {
                setError('No movies found');
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            setError('Failed to fetch movies');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="relative h-[85vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2126] to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2126] via-transparent to-transparent"></div>

            <div className='absolute mt-[400px] md:mt-[350px] px-10 md:px-24 '>
                <h2 className='text-white text-[19px] lg:text-[25px]'>Watch only on HULU</h2>
                <h2 className='text-white text-[36px] lg:text-[67px] font-bold'>{movieList?.original_title}</h2>
                <div className='flex gap-5 mt-5'>
                    <button className='bg-white text-black px-8 py-2 rounded-md hover:bg-gray-200 transition-all duration-300'>PLAY</button>
                    <button className='bg-transparent border-2 border-white text-white cursor-pointer hover:border-gray-500 px-8 py-2 rounded-md transition-all duration-300'>DETAILS</button>
                </div>
            </div>
            {movieList?.backdrop_path && (
                <img 
                    src={IMAGE_BASE_URL + movieList.backdrop_path}
                    width={1920} 
                    height={1080} 
                    className="h-[85vh] object-cover w-full"
                    alt={movieList?.original_title}
                />
            )}
        </div>
    )
}

export default Hero