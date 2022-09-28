import { useQuery, gql } from '@apollo/client';
import Equipment from '../Equipment';
import React from 'react';

const getAll = gql`
  query {
    all {
        id
        name
        model
        manufacturer
        imageLink
    }
  }
`;


const getAllEquipments = gql`
  query {
    allEquipments {
        id
        name
        model
        manufacturer
        imageLink
    }
  }
`;

const getAllLocations = gql`
  query {
    allLocations {
        id
        name
        model
        manufacturer
        imageLink
    }
  }
`;

export default function DisplayEquipments(props) {
    var query = getAll; 
    if(props.filter === "equipments")
      query = getAllEquipments;
    if(props.filter === "locations")
      query = getAllLocations;
    const { loading, error, data } = useQuery(query);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <Equipment data={(data.all ?? (data.allEquipments ?? data.allLocations ))}/>
}