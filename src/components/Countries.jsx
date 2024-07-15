import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { Select, Space } from 'antd';
const { Search } = Input;

const Countries = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('all')
    const found = data.find(i => i.name.common.toLocaleLowerCase().includes(search))

    const getCounteries = async () => {
        setLoading(true)
        const res = await fetch(`https://restcountries.com/v3.1/${region}`);
        const countries = await res.json();
        setData(countries);
        setLoading(false)
    }

    useEffect(() => {
        getCounteries()
    }, [region])

    useEffect(() => {
        getCounteries()
    }, [])

    return (
        <section>
            <div className='container py-10 flex justify-between items-center'>
                <div className='w-[480px]'>
                    <Search placeholder="Search for a country..." enterButton="Search" size="large" loading />
                </div>
                <div className="flex justify-center items-center h-screen">
                    <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className=" bg-white border border-gray-300 px-4 py-2 rounded shadow "
                    >
                        <option value="all">All</option>
                        <option value="region/africa">Africa</option>
                        <option value="region/americas">Americas</option>
                        <option value="region/asia">Asia</option>
                        <option value="region/europe">Europe</option>
                        <option value="region/oceania">Oceania</option>
                    </select>
                </div>
            </div>
            <div>
                {
                    data.length > 1 && !found &&
                    <div className='container text-center'>
                        <h1>Topilmadi 🙁</h1>
                    </div>
                }

                {
                    loading ?
                        <div className='container text-center'>
                            <h1>Loading...</h1>
                        </div>
                        : <ul className='container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[60px]'>
                            {
                                data.map((i, index) => {
                                    return (
                                        <Link key={index} className={`shadow-cart rounded-md overflow-hidden ${i.name.common.toLocaleLowerCase().includes(search) ? 'block'
                                            : 'hidden'}`}>
                                            <img className='h-40 w-full' src={i.flags.png} alt="" />
                                            <div className='p-5'>
                                                <h3>{i.name.common}</h3>

                                                <ul className='card-desc space-y-1 mt-2 text-sm'>
                                                    <li>
                                                        <b>Population:</b>
                                                        <span>{i.population}</span>
                                                    </li>
                                                    <li>
                                                        <b>Region:</b>
                                                        <span>{i.region}</span>
                                                    </li>
                                                    <li>
                                                        <b>Capital:</b>
                                                        <span>{i.capital}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                }

            </div>
        </section>
    )
}

export default Countries