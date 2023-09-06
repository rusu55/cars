import { Hero, SearchBar, CustomFilter } from "@components";
import { fuels, yearsOfProduction } from "@constants";
import { fetchCars } from "@utils";

export default async function Home() {
  const allCars = await fetchCars();
  return (
    <main className='overflow-hidden'>
        <Hero />

        <div className='mt-12 padding-x padding-y max-width' id='discover'>
            <div className='home__text-container'>
              <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
              <p>Explore out cars you might like</p>
            </div>

            <div className='home__filters'>
                <SearchBar />

                <div className='home__filter-container'>
                  <CustomFilter title='fuel' options={fuels} />
                  <CustomFilter title='year' options={yearsOfProduction} />
                </div>
            </div>

            <div className='home__error-container'>
                <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                <p>Salut</p>
          </div>
        </div>
    </main>
  )
}
