import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const useTrabajos = orden => {

    const [trabajos, guardarTrabajos] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerTrabajos = () => {
            firebase.db.collection('trabajos').orderBy(orden, 'desc').onSnapshot(manejarSnapshot)
        }
        obtenerTrabajos();
    }, []);

    function manejarSnapshot(snapshot) {
        const trabajos = snapshot.docs.map(doc => {
            return {
            id: doc.id,
            ...doc.data()
            }
        });

        guardarTrabajos(trabajos);
    }

    return {
        trabajos
    }
}

export default useTrabajos;