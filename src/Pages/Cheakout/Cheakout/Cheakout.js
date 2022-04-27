import userEvent from '@testing-library/user-event';
import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Cheakout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast('Your order is Booked!!!');
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="Email" placeholder='Email' required readOnly/>
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly/>
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required/>
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required/>
                <br />
                <input className='btn btn-primary' type="submit" value="Please Order" />
            </form>
        </div>
    );
};

export default Cheakout;