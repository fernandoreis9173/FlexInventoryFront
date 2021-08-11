export default function AdicionarItem(){
  return(
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

function FormAddItem(){
  //receber as variaveis do banco



  //renderiza o formulário
  //ID PREENCHIDO PELO USUÁRIO
  //FABRICANTE SELECT, O BANCO QUE PUXA
  //MODELO SELECT, O BANCO QUE PUXA
  //LOCAL SELECT, O BANCO QUE PUXA
  //AREA SELECT, O BANCO QUE PUXA
  //QUANTIDADE  PREENCHIDA PELO USUÁRIO

  return(
    <>
      <div>
        <form action="">
          <div className="formInput">
            <label><strong>ID</strong></label>
            <input className="itemInput"type="text" name="id_item" id="id_item" placeholder="ID" required /> 
        
            <label><strong>Fabricante</strong></label>
            <select className="itemInput" id="">
              <option value="#">Selecione uma opção:</option>
              <option value="teste">OPÇÃO TESTE</option>
              </select> 

            <label><strong>Modelo</strong></label>
            <select className="itemInput" id="">
              <option value="#">Selecione uma opção:</option>
              <option value="teste">OPÇÃO TESTE</option>
              </select> 

            <label><strong>Local</strong></label>
            <select className="itemInput" id="">
              <option value="#">Selecione uma opção:</option>
              <option value="teste">OPÇÃO TESTE</option>
              </select> 

            <label><strong>Area</strong></label>
            <select className="itemInput" id="">
              <option value="#">Selecione uma opção:</option>
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