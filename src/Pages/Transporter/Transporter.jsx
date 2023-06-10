import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import uniqid from 'uniqid';

const Transporter = () => {
    // const id = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);




    const [formData, setFormData] = useState({
        orderid: uniqid(),
        price: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleTransporterForm = (e) => {
        e.preventDefault();
        console.log(formData);

        const { orderid, price } = formData; // Destructure the required fields

        fetch(`http://localhost:5000/product/${orderid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                toast.success('product added Successfully.');
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-7'>Transporter page</h1>
            <form onSubmit={handleTransporterForm} action="" className='w-[500px] mx-auto p-8 rounded-md border-2 mb-10'>
                <div className="flex flex-col gap-1 mb-6">
                    <label htmlFor="" className='font-bold'>Orderid</label>
                    <select
                        name="orderid"
                        value={formData.orderid}
                        onChange={handleInputChange}
                        className="select select-bordered w-full">
                        {
                            products.map(product => <option key={product._id} value={product.orderid}>
                                {product.orderid}
                            </option>)
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-1 mb-3">
                    <label htmlFor="" className='font-bold'>Price</label>
                    <input
                        name='price'
                        type="text"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Type here" className="input input-bordered w-full bg-inherit" />
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Send Push
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Transporter;