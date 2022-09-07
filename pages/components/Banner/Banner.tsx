import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Movie } from '../../../typings';
import { baseUrl } from '../../../constants/movie';

interface Props {
	netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
	const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {

        // console.log('movie : ', netflixOriginals)
        setMovie(
          netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
      }, [netflixOriginals])

    useEffect(() => {
			console.log('netflixOriginals: ', netflixOriginals);
		}, []);

	return (
		<div>
            <div>
				<Image
					layout="fill"
					src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
					objectFit="cover"
				/>
			</div>
		</div>
	);
};

export default Banner;
