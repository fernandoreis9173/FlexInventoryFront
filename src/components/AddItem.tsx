import axios from '../components/services/api'
import { useEffect } from 'react';
import { useState } from 'react';
import { DashboardOutlined } from '@material-ui/icons';
import { dataAttributes } from '@material/data-table';
// import {Field} from 'formik';

interface Responsedata {
  id: number,
  nm_fabricante: string,
  nm_modelo: string,
  nm_local: string,
  nm_predio: string
}

export default function AdicionarItem() {
  return (
    <>
      <div className="form-fabricante">
        <div className="modal">
          <div className="form">
            <h3 className="subtitle">ADICIONAR ITEM</h3>
            <FormAddItem />

          </div>
        </div>
      </div>
    </>
  )
}

function FormAddItem() {
  //receber as variaveis do banco
  const [equipamento, setEquipamento] = useState('');
  const [nm_fabricante, setFabricante] = useState('');
  const [nm_modelo, setModelo] = useState('');
  const [nm_local, setLocal] = useState('');
  const [nm_predio, setPredio] = useState('');


  useEffect(() => {
    axios.get<Responsedata[]>("equipamento/byid/"+(!!equipamento ? equipamento : 0))
      .then((response) => {
        const nm_fabricante = response.data[0].nm_fabricante;
        const nm_modelo = response.data[0].nm_modelo;
        const nm_local = response.data[0].nm_local;
        const nm_predio = response.data[0].nm_predio;
        console.log(response.data[0].nm_fabricante);
        setFabricante(nm_fabricante);
        setModelo(nm_modelo);
        setLocal(nm_local);
        setPredio(nm_predio);
      })
      .catch((error)=>{
        setFabricante('');
        setModelo('');
        setLocal('');
        setPredio(''); 
      });

  },[equipamento])




  //renderiza o formulário
  //ID PREENCHIDO PELO USUÁRIO
  //FABRICANTE SELECT, O BANCO QUE PUXA
  //MODELO SELECT, O BANCO QUE PUXA
  //LOCAL SELECT, O BANCO QUE PUXA
  //AREA SELECT, O BANCO QUE PUXA
  //QUANTIDADE  PREENCHIDA PELO USUÁRIO

  return (
    <>

        <form action="">
        <div className="formInput">
          <label><strong>ID</strong></label>
          <input className="itemInput" onBlur={(e)=> setEquipamento(e.target.value)} type="text" name="id" id="id" placeholder="ID" required />

          <label><strong>Fabricante</strong></label>
          <input className="itemInput"  type="text" name="nm_fabricante" value={nm_fabricante} disabled />

          <label><strong>Modelo</strong></label>
          <input className="itemInput"  type="text" name="nm_modelo" value={nm_modelo} disabled />


          <label><strong>Local</strong></label>
          <input className="itemInput"  type="text" name="nm_local" value={nm_local} disabled />

          <label><strong>Area</strong></label>
          <input className="itemInput"  type="text" name="nm_predio" value={nm_predio} disabled />

          <label><strong>Quantidade</strong></label>
          <input className="itemInput" type="number" name="id_quantidade" id="id_quantidade" placeholder="Quantidade" />

          <button className="buttonInput">Adicionar Item</button>

        </div>
      </form>
      <div>
        
      </div>
    </>
  )
    }
