import { useQuery, gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import LoginPlantAdmin from '../LoginPlantAdmin';
import LoginTechnician from '../LoginTechnician';
import RegisterPlantAdmin from '../RegisterPlantAdmin';
import RegisterTechnician from '../RegisterTechnician';

class _UserManager {
    constructor() {
        if (_UserManager._instance) {
            throw new Error("Singleton classes can't be instantiated more than once.")
        }
        _UserManager._instance = this;
    
        // ... your rest of the constructor code goes after this
    }
      
cred = {
    email: undefined,
    adminEmail: undefined
}

isLoggedIn = () => {
    if(UserManager.cred.email) {
        return true;
    }
    else {
        return false;
    }
}

isAdminLoggedIn = () => {
    if(UserManager.cred.adminEmail) {
        return true;
    }
    else {
        return false;
    }
}
}
const UserManager = new _UserManager();
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
    mutation rt($technician: TechnicianInputType!){
        registerTechnician(technician: $technician)
    }
`

const RegisterTechnicianComponent = () => {
    const [ register, { data, loading, error} ] = useMutation(REGISTER_TECHNICIAN);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <RegisterTechnician register={register}/>;
}


const LOGIN_PLANT_ADMIN = gql`
    mutation lpa($plantAdmin: PlantAdminInputType!){
        loginPlantAdmin(plantAdmin: $plantAdmin)
    }
`

const LoginPlantAdminComponent = () => {
    const [ login, { data, loading, error} ] = useMutation(LOGIN_PLANT_ADMIN);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <LoginPlantAdmin login={login}/>;
}


const LOGIN_TECHNICIAN = gql`
    mutation lt($technician: TechnicianInputType!){
        loginTechnician(technician: $technician)
    }
`

const LoginTechnicianComponent = () => {
    const [ login, { data, loading, error} ] = useMutation(LOGIN_TECHNICIAN);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <LoginTechnician login={login}/>;
}


export {IsTechnicianLoggedIn, UserManager, RegisterPlantAdminComponent, RegisterTechnicianComponent, LoginTechnicianComponent, LoginPlantAdminComponent};