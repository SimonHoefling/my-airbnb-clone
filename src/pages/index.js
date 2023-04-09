import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import SmallCard from '@/components/SmallCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData }) {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some date from a server - API Endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map(({img, distance, location}) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
