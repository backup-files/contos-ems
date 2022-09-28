import { useQuery, gql } from '@apollo/client';
import Notifications from '../Notifications';
import React from 'react';

const getAllNotifications = gql`
  query {
    allNotifications {
        id
        technicianEmail
        equipmentId
        title
        severity
        comments
        timestamp
        status
    }
  }
`;

export default function DisplayNotifcations() {
    const { loading, error, data } = useQuery(getAllNotifications);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <Notifications data={data.allNotifications}/>
}