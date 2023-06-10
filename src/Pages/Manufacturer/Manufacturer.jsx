import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import uniqid from 'uniqid';

const Manufacturer = () => {

    const [formData, setFormData] = useState({
        orderid: uniqid(),
        to: "",
        from: "",
        quantity: 0,
        address: "",
        vehicle: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleManufectureForm = (e) => {
        e.preventDefault();
        const newOrderId = uniqid();
        setFormData((prevData) => ({
            ...prevData,
            orderid: newOrderId,
        }));

        console.log(formData);
        const form = e.target;

        fetch('http://localhost:5000/product', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                toast.success('product added Successfully.');
                form.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-7'>Manufacturer page</h1>
            <form onSubmit={handleManufectureForm} action="" className='w-[500px] mx-auto p-8 rounded-md border-2 mb-10'>
                <div className="flex flex-col gap-1 mb-3">
                    <label htmlFor="" className='font-bold'>Order Id</label>
                    <input
                        name='orderid'
                        type="text"
                        defaultValue={formData.orderid}
                        onChange={handleInputChange}
                        readOnly
                        placeholder="Type here" className="input input-bordered w-full bg-inherit" />
                </div>
                <div className="flex flex-col gap-1 mb-3">
                    <label htmlFor="" className='font-bold'>To</label>
                    <input
                        name='to'
                        type="text"
                        value={formData.to}
                        onChange={handleInputChange}
                        placeholder="Type here" className="input input-bordered w-full bg-inherit" />
                </div>
                <div className="flex flex-col gap-1 mb-3">
                    <label htmlFor="" className='font-bold'>From</label>
                    <input
                        name='from'
                        type="text"
                        value={formData.from}
                        onChange={handleInputChange}
                        placeholder="Type here" className="input input-bordered w-full bg-inherit" />
                </div>
                <div className="flex flex-col gap-1 mb-3">
                    <label htmlFor="" className='font-bold'>Quantity</label>
                    <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="select select-bordered w-full">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 mb-3">
                    <label htmlFor="" className='font-bold'>Address</label>
                    <input
                        name='address'
                        type="text"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Type here" className="input input-bordered w-full bg-inherit" />
                </div>
                <div className="flex flex-col gap-1 mb-6">
                    <label htmlFor="" className='font-bold'>Transporter</label>
                    <select
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        className="select select-bordered w-full">
                        <option value="taxi">Taxi</option>
                        <option value="van">Van</option>
                        <option value="track">Track</option>
                        <option value="bike">Bike</option>
                        <option value="cycle">Cycle</option>
                    </select>
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

export default Manufacturer;