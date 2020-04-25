import React,{Fragment, useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';


function App() {

  const [busquedaLetra,guardarBusquedaLetra] = useState({});
  const [letra,guardarLetra] = useState('');

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0 ) return;
  
    const consultarApiLetra = async () => {
      const {artista,cancion} = busquedaLetra;
      const url1 =`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      
      const resultado = await axios.get(url1);
      guardarLetra(resultado.date.lyrics);
    };
    consultarApiLetra();
  },[busquedaLetra]);


  return (
      <Fragment>
        <Formulario
          guardarBusquedaLetra={guardarBusquedaLetra}
        />
      </Fragment>
  );
}

export default App;
