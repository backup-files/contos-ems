import { useQuery, gql } from '@apollo/client';
import React, { useEffect } from 'react';
var email = undefined;
var adminEmail = undefined;

const isLoggedIn = () => {
    if(email === undefined) {
        return false;
    }
    else {
        return true;
    }
}


const isAdminLoggedIn = () => {
    if(adminEmail === undefined) {
        return false;
    }
    else {
        return true;
    }
}

const IS_TECHNICIAN_LOGGED_IN = (email) => gql`
query {
    isTechnicianLoggedIn(email: ${email})
}
`

function IsTechnicianLoggedIn() {
    const { loading, error, data } = useQuery(IS_TECHNICIAN_LOGGED_IN);

    useEffect(() => {
        
        console.log(data, typeof(data));
        }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <></>;
}

export {IsTechnicianLoggedIn, isLoggedIn, isAdminLoggedIn};