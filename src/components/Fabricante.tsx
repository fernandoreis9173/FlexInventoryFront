
import React, { useState  } from 'react';
import TabelaFabricante from './TableFabricante';
//import api from './services/api';
import axios from 'axios';

import { FlashMessage, FlashErrorMessage } from './FlashMessage';

export default function CadastroFabricante(){
  return(
    <>
      <ModalFabricante />
    </>
  );
}


export function ModalFabricante(){
  return(
    <>
      <div className="form-fabricante">
        <div className="modal">
          <div className="form">
              <h3 className="subtitle">ADICIONAR FABRICANTE</h3>
              <FormFabricante />
              <TabelaFabricante />
              
          </div>
        </div>        
      </div>
    </>
  );
}

export function FormFabricante(){
  //configurando as funções dos alertas

  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(true);
  const [message, setMessage] = useState('');

  const [fabricante, setFabricante] = useState('');

  function handleCadastro(event: React.FormEvent<HTMLInputElement>){
    
    const fabricanteTable = event.currentTarget.value;
    setFabricante(fabricanteTable);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('http://10.113.162.132:3333/fabricante', {
      nm_fabricante: fabricante,
    })
    .then(response => {
      setMessage(response.data);
      setSucess(true);
    })
    .catch(error => {
      console.log(error);
      setMessage(error.data)
      setError(true);
    })

    setSucess(false);
  }
  
  
  
  /*useEffect(() => {
   axios.post('http://10.113.162.132:3333/fabricante', {
      nm_fabricante: fabricante,
    })
    .catch(function (error) {
      console.log(error);
      /*<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Preencha todos os campos indicados!
        </Alert>
      </Snackbar>
    });
  }, [fabricante]);*/
 

  return(
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="fabricante">
          <label><strong>Nome do Fabricante</strong></label>
          <input className="input_fabricante" value={fabricante} type="text" name="nm_fabricante" id="nm_fabricante" placeholder="Insira o Fabricante" required onChange={(event) => handleCadastro(event)}/>
          
          <button className="new_button">Adicionar</button>
        </div>
      </form>
          {
            sucess ? <FlashMessage message={message}/> : error ? <FlashErrorMessage message={message}/> : ''
          }
      </div>
    </>
  );
}

