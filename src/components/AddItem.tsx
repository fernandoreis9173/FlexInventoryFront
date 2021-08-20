import axios from '../components/services/api'
import { useState, FormEvent, useEffect } from 'react';

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
  const [quantidade, setQuantidade] = useState(0);


  useEffect(() => {
    axios.get<Responsedata[]>("equipamento/byid/" + (!!equipamento ? equipamento : 0))
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
      .catch((error) => {
        setFabricante('');
        setModelo('');
        setLocal('');
        setPredio('');
      });

  }, [equipamento])



  function zpl(serial: string): string {

    const label = `^XA
    ^MMT
    ^PW900
    ^LL0600
    ^LS0
    ^BY8,3,99^FT739,285^BCI,,Y,N
    ^FD>:${serial}^FS
    ^PQ1,0,1,Y^XZ`;
    return label;

  }

  async function handleClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();


    for (let index = 0; index < quantidade; index++) {

      axios.post("serial", {
        id_equipamento: equipamento,
      }).then((response) => {

        const serial = response.data[0].id;
        const label = zpl(serial);

        axios.post("printer", {
          zpl: label,
          host: "10.113.137.218",
          port: 9100
        }).then((response) => console.log(response.data));
      });
    }
  };



  return (
    <>

      <form action="" onSubmit={handleClick}>
        <div className="formInput">
          <label><strong>ID</strong></label>
          <input className="itemInput" onBlur={(e) => setEquipamento(e.target.value)} type="text" name="id" id="id" placeholder="ID" required />

          <label><strong>Fabricante</strong></label>
          <input className="itemInput" type="text" name="nm_fabricante" value={nm_fabricante} disabled />

          <label><strong>Modelo</strong></label>
          <input className="itemInput" type="text" name="nm_modelo" value={nm_modelo} disabled />


          <label><strong>Local</strong></label>
          <input className="itemInput" type="text" name="nm_local" value={nm_local} disabled />

          <label><strong>Area</strong></label>
          <input className="itemInput" type="text" name="nm_predio" value={nm_predio} disabled />

          <label><strong>Quantidade</strong></label>
          <input className="itemInput" type="number" onChange={(e) => setQuantidade(Number(e.target.value))} name="id_quantidade" id="id_quantidade" placeholder="Quantidade" />

          <button className="buttonInput">Adicionar Item</button>

        </div>
      </form>
      <div>

      </div>
    </>
  )
}
