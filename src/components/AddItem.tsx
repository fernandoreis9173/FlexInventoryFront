import axios from '../components/services/api'
import { useEffect } from 'react';
import { useState } from 'react';

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
  const [fabricante, setFabricante] = useState('');
  const [equipamento, setEquipamento] = useState('0');

  useEffect(() => {
    axios.get<Responsedata>("equipamento/byid/3")
      .then((response) => {
        const { nm_fabricante } = response.data;
        setFabricante(nm_fabricante);
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
      <div>
        <form action="">
          <div className="formInput">
            <label><strong>ID</strong></label>
            <input className="itemInput" onBlur={(e)=> setEquipamento(e.target.value)} type="text" name="id_item" id="id_item" placeholder="ID" required />

            <label><strong>Fabricante</strong></label>
            <select className="itemInput" id="">
              <option value="#">{fabricante}</option>
              <option value="teste">OPÇÃO TESTE</option>
            </select>

            <label><strong>Modelo</strong></label>
            <select className="itemInput" id="">
              <option value="#">Modelo:</option>
              <option value="teste">OPÇÃO TESTE</option>
            </select>

            <label><strong>Local</strong></label>
            <select className="itemInput" id="">
              <option value="#">Local:</option>
              <option value="teste">OPÇÃO TESTE</option>
            </select>

            <label><strong>Area</strong></label>
            <select className="itemInput" id="">
              <option value="#">Area:</option>
              <option value="teste">OPÇÃO TESTE</option>
            </select>

            <label><strong>Quantidade</strong></label>
            <input className="itemInput" type="number" name="id_quantidade" id="id_quantidade" placeholder="Quantidade" />

            <button className="buttonInput">Adicionar Item</button>

          </div>
        </form>
      </div>
    </>
  )
}