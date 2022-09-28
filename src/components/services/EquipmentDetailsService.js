import { useQuery, gql } from '@apollo/client';
import EquipmentDetails from '../EquipmentDetails';
import React from 'react';
import { useLocation } from 'react-router-dom1';

const equipmentById = gql`
  query getEqById($id: Int!) {
    equipmentById(id: $id) {
      id
      name
      description
      installedDate
      serviceDueDate
      manufacturer
      model
      temperature
      angularVelocity
      pressure
      type
      imageLink
    }
  }
`;

export default function DisplayEquipmentDetails() {
    const location = useLocation();
    const id = location.state.id;
    const { loading, error, data } = useQuery(equipmentById, {
      variables: { id }
    });

    // React.useEffect(() => {
    //   setTimeout(() => {
    //     console.log(location.state);
    //   }, 1000);
    // }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <EquipmentDetails data={data.equipmentById}/>
}