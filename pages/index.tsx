import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import axios from 'axios';
import requestsURI from '../utils/requests';
import { Movie } from '../typings';
import { useEffect } from 'react';

interface Props {
  netflixOriginals: Movie[],
}

const Home = ({netflixOriginals}: Props) => {

  useEffect(()=>{
    console.log(netflixOriginals)
  },[]);

	return (
		<div className="realative h-[140vh] bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
			<Head>
				<title>HanaFlix - Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
        <Banner netflixOriginals={netflixOriginals} />

				{/* main */}
				<section>
					{/* Row */}
					{/* Row */}
					{/* Row */}
					{/* Row */}
					{/* Row */}
					{/* Row */}
				</section>
			</main>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
  const netflixOriginals = await axios.get(requestsURI.netflixOriginals).then(res=>res.data.results)
  return {
    props: {
      netflixOriginals,
    }
  }
}
