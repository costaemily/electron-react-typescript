import React, { useEffect, useState } from 'react'
import { getDate } from "../../common/getDate"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function List({ listaTarefas, editarTarefa, excluirTarefa }: any) {

  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [date, setDate] = useState(getDate())

  useEffect(() => {
      setTimeout(() => setDate(getDate()), 1000)
  }, [date, setDate])

  const handleClickOpen = (id: string) => {
    setId(id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescricao((event.target as HTMLInputElement).value);
  };

  const atualizarTarefa = async(id: string, descricaoTarefa: string, data: string) => {
    editarTarefa(id, descricao, date)
    handleClose()
  }

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(listaTarefas).map((item: any) => (
              <tr key={item[1]._id}>
                <td>{item[1].descricao}</td>     
                <td>{item[1].dataTarefa}</td>           
                <td>
                <button onClick={() => handleClickOpen(item[1]._id)}>Editar</button>
                <button onClick={() => excluirTarefa(item[1]._id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Atenção</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Altere sua tarefa
            </DialogContentText>
            <TextField
              value={descricao}
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="descricao"
              label="Adicione sua tarefa"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={() => atualizarTarefa(id, descricao, date)}>Alterar</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}
export default List;
