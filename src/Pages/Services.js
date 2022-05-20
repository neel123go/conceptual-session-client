import React, { useEffect, useState } from 'react';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div>
            <h2>This is services: {service.length}</h2>
        </div>
    );
};

export default Services;