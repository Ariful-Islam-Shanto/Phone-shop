import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('./phones.json')
        .then(res => res.json())
        .then(data => setPhones(data));
    }, []);

    return (
        <div className='py-20 space-y-10'>
            <h1 className="text-5xl text-black text-center font-semibold">Our Phones Collections</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    phones.map(phone => <PhoneCard key={phone.id} phone={phone}> </PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;