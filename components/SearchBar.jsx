"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturer } from '@components';

const SearchBar = () => {
  const SearchButton = ({ otherClasses }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/assets/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e) =>{
    e.preventDefault();
  }
  console.log("Refreshed Search Bar")
  return (
    <form className='searchbar' onSubmit={handleSearch}>
         <div className='searchbar__item'>
              <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
              />
              <SearchButton otherClasses='sm:hidden' />
         </div>
         <div className='searchbar__item'>
            <Image
              src='/assets/model-icon.png'
              width={25}
              height={25}
              className='absolute w-[20px] h-[20px] ml-4'
              alt='car model'
            />
             <input
                type='text'
                name='model'
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder='Tiguan...'
                className='searchbar__input'
              />
              <SearchButton otherClasses='sm:hidden' />
         </div>
         <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar