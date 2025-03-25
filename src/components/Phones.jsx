import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData()
    return (
        <div>
            Phones..
            <div>
                {
                    phones.map(phone=> <p key={phone.id}><Link to={`/phones/${phone.id}`}>{phone.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default Phones;