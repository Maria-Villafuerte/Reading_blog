import { useState, useEffect } from 'react'; // Asegúrate de importar useState y useEffect de React
import { ref, get } from 'firebase/database'; // Importa las funciones ref y get de Firebase
import { database } from './firebaseConfig'; // Importa la configuración de tu base de datos Firebase
import React from 'react'

const Try = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    const usersRef = ref(database, 'posts');
    get(usersRef).then((snapshot)=>{
      if(snapshot.exists()){
        const usersArray = Object.entries(snapshot.val()).map(([id,data])=>({
          id,
          ...data,

        }));
        setUsers(usersArray);
      }else{
        console.log('no data available');
      }
    }).catch((error) =>{
      console.log(error)
    });

  },[])
  return (
    <>
    <main>
      <h1>FIREBASE</h1>
      <div></div>
      {users.map((user)=>(
        <div key={user.id}>
          <h2>{user.title}</h2>
          <p>{user.subtitle}</p>

        </div>
      ))}
    </main>
    
    </>
  )
}

export default Try