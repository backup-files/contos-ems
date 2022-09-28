import { useQuery, gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import RegisterPlantAdmin from '../RegisterPlantAdmin';
import RegisterTechnician from '../RegisterTechnician';

class UserManager {
static cred = {
    email: undefined,
    adminEmail: undefined
}

static isLoggedIn = () => {
    if(UserManager.cred.email) {
        return true;
    }
    else {
        return false;
    }
}

static isAdminLoggedIn = () => {
    if(UserManager.cred.adminEmail) {
        return true;
    }
    else {
        return false;
    }
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

const REGISTER_PLANT_ADMIN = gql`
    mutation rpa($plantAdmin: PlantAdminInputType!){
        registerPlantAdmin(plantAdmin: $plantAdmin)
    }
`

const RegisterPlantAdminComponent = () => {
    const [ register, { data, loading, error} ] = useMutation(REGISTER_PLANT_ADMIN);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <RegisterPlantAdmin register={register}/>;
}


const REGISTER_TECHNICIAN = gql`
    mutation rpa($technician: TechnicianInputType!){
        registerTechnician(technician: $technician)
    }
`

const RegisterTechnicianComponent = () => {
    const [ register, { data, loading, error} ] = useMutation(REGISTER_TECHNICIAN);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <RegisterTechnician register={register}/>;
}


export {IsTechnicianLoggedIn, UserManager, RegisterPlantAdminComponent, RegisterTechnicianComponent};