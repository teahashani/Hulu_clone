import React from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'
import genre from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div className='mt-24 p-5 px-10 md:px-20 bg-[#1e2126]'>
        {genre.slice(0, 5).map((item:any)=>(
            <div key={item.id} className='mb-8'>
                <h2 className='text-white text-[20px] font-bold '>{item.name}
                <span className='font-normal text-[16px] cursor-pointer text-gray-400 float-right flex items-center hover:text-white transition-all duration-300'>VIEW ALL <IoChevronForwardSharp className='text-white ml-1' /></span></h2>
                <MovieList genreId={item.id} />
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList
