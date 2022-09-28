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

export default function DisplayEquipments() {
    const { loading, error, data } = useQuery(getAll);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <Equipment data={data.all}/>
}