import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CountryDetail = () => {
  const [country , setCountry] = useState(null)
  const { name } = useParams()
  const [loading , setLoading] = useState(true)

  const getData = async() => {
    setLoading(true)
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await res.json()
    setCountry(data[0])
    setLoading(false)
  }

  useEffect(() =>{
    getData()
  })

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, ",")
  }
  return(
    <section>
      <div className='container py-10'>
        {loading 
          ? <h1 className='text-center'>loading</h1>
          :
          <div>
            {country &&
            <div>
              <Link to={'/'} className='space-x-1 text-base dark:bg-light-dark py-2 px-5 rounded-md'>
                <i className='bi bi-arrow-left'></i>
                <span>Back</span>
              </Link>
              <div className='grid grid-cols-5 gap-20 py-10'>
                <div className='col-span-2'>
                  <img className='w-full' src={country.flags.png} alt={country.flags.alt} />
                </div>
                <div className='col-span-3'>
                  <h3 className='mb-3'>{country.name.common}</h3>
                  <ul className='space-y-2'> 
                    <li className='space-x-2'>
                      <b>Region:</b>
                      <span>{country.region}</span>
                    </li>
                    <li className='space-x-2'>
                      <b>Sub Region:</b>
                      <span>{country.subregion}</span>
                    </li>
                    <li className='space-x-2'>
                      <b>Capital:</b>
                      <span>{country.capital}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            }
          </div>
        }
      </div>
    </section>
  )
}

export default CountryDetail