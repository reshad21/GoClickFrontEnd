import React, { useEffect, useState } from 'react';

const Hometable = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (e) => {
        console.log(searchTerm);
        setSearchTerm(e.target.value);
    };

    const [searchData, setSearchData] = useState([]);
    const handleSearch = () => {
        // console.log('Searching for:', searchTerm);
        fetch(`http://localhost:5000/product/search?term=${searchTerm}`)
            .then(res => res.json())
            .then(data => setSearchData(data))
    };
    return (
        <div className='my-40'>
            <div className="form-control">
                <div className="input-group justify-end">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Search…"
                        className="input input-bordered" />
                    <button
                        onClick={handleSearch}
                        className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Order id</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (products.length > 0 && searchData.length === 0) ?
                                products.map(product => {
                                    return (
                                        <tr key={product._id}>

                                            <td>
                                                <span className="badge badge-ghost badge-sm">{product?.orderid}</span>
                                            </td>
                                            <td>{product.to}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">{product.from}</button>
                                            </th>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>

                                        </tr>
                                    )

                                })
                                :
                                searchData.map(product => {
                                    return (
                                        <tr key={product._id}>

                                            <td>
                                                <span className="badge badge-ghost badge-sm">{product?.orderid}</span>
                                            </td>
                                            <td>{product.to}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">{product.from}</button>
                                            </th>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>

                                        </tr>
                                    )

                                })

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Hometable;