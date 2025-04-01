import React, { useState } from 'react'

function MovieCard({ movie }: { movie: any }) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    const [isHovered, setIsHovered] = useState(false);
    
    if (!movie || !movie.backdrop_path) {
        return null;
    }

    return (
        <div 
            className='inline-block m-2 md:m-3 cursor-pointer group'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={IMAGE_BASE_URL + movie.backdrop_path} 
                className="w-[230px] md:w-[340px] object-cover rounded-2xl 
                group-hover:border-[5px] border-gray-400 p-2 transition-all duration-300 ease-in-out"
                alt={movie.original_title || 'Movie'}
            />
            <h2 className='text-gray-400 mt-2 text-[12px] md:text-[17px] font-bold'>
                {isHovered ? 'START WATCHING' : 'WATCH NOW'}
            </h2>
            <h2 className='text-white mt-1 transition-all md:text-[22px] 
                group-hover:font-bold'>{movie.original_title}</h2>
        </div>
    )
}

export default MovieCard