"use client"
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState, Fragment } from 'react'

import { manufacturers } from '@constants'

const SearchManufacturer = ({manufacturer, setManufacturer}) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
        console.log("Refreshed Manufacturer")
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                            <Image
                                src='/assets/car-logo.svg'
                                width={20}
                                height={20}
                                className='ml-4'
                                alt='car logo'
                            />
                    </Combobox.Button>

                    {/* Input field for searching */}
                    <Combobox.Input
                        className='search-manufacturer__input'
                        displayValue={(item) => item}                       
                        placeholder='Volkswagen...'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer