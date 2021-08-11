
import React, { useState  } from 'react';
import TabelaFabricante from './TableFabricante';
//import api from './services/api';
import axios from 'axios';

//importações dos alertas
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

//configurações de estilização dos alertas
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1,
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    (!!fabricante) ? setOpen(true) : setOpen(false);
    
    console.log('click',fabricante);

    axios.post('http://10.113.162.132:3333/fabricante', {
      nm_fabricante: fabricante,
    }).then((response) => response.data)
    .then((response) => console.log('data'));
    
    
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setFabricante('');
  };

  const [fabricante, setFabricante] = useState('');

  function handleCadastro(event: React.FormEvent<HTMLInputElement>){
    
    const fabricanteTable = event.currentTarget.value;
    setFabricante(fabricanteTable);
  };

  

  // useEffect(() => {
  //  axios.post('http://10.113.162.132:3333/fabricante', {
  //     nm_fabricante: fabricante,
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     /*<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
  //       <Alert onClose={handleClose} severity="error">
  //         Preencha todos os campos indicados!
  //       </Alert>
  //     </Snackbar>*/
  //   });
  // }, [fabricante]);

  

  return(
    <>
    <div className={classes.root}>
      <form action="">
        <div className="fabricante">
          <label><strong>Nome do Fabricante</strong></label>
          <input className="input_fabricante" value={fabricante} type="text" name="nm_fabricante" id="nm_fabricante" placeholder="Insira o Fabricante" required onChange={(event) => handleCadastro(event)}/>
          
          <button className="new_button" onClick={(e)=>{handleClick(e)}}>Adicionar</button>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
          Modelo Adicionado com sucesso!
          </Alert>
          </Snackbar>
        </div>
      </form>
      </div>
    </>
  );
}

