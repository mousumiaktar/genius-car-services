import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div className='text-center'>
            <h2>You are about to book: {service.name}</h2>
            <div>
                <Link to={`/cheakout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Cheakout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;