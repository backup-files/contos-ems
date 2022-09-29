import { useQuery, gql, useMutation } from '@apollo/client';
import EquipmentDetails from '../EquipmentDetails';
import React from 'react';
import { useLocation } from 'react-router-dom1';
import AddNotification from '../AddNotification';

const AN = gql`
  mutation an($notification: NotificationInputType!) {
    raiseNotification(notification: $notification)
  }
`;

export default function DisplayAddNotification() {
    const [raiseNotification, { loading, error, data }] = useMutation(AN);

    // React.useEffect(() => {
    //   setTimeout(() => {
    //     console.log(location.state);
    //   }, 1000);
    // }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <AddNotification raiseNotification={raiseNotification}/>
}