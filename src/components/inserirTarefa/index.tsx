import React, { useEffect, useState } from 'react';
import Botao from "../../components/botao/index"
import { getDate } from "../../common/getDate"

function Input({ criar } : any) {

    const [descricaoTarefa, setDescricaoTarefa] = useState(""); 
    const [date, setDate] = useState(getDate())

    useEffect(() => {
        setTimeout(() => setDate(getDate()), 1000)
    }, [date, setDate])

    const adicionarTarefa = async(descricaoTarefa: string, date: string) => {
        criar(descricaoTarefa, date)
        clear()
    }

    function clear(){
        setDescricaoTarefa("")
    }
    
    return (
        <div>
            <div className="todo-wrapper">
                <h1>Lista de Tarefas</h1>
                    <input type="text" placeholder="Adicione uma tarefa" value={descricaoTarefa} onChange={(event) => { setDescricaoTarefa(event.target.value) }}/>

                    <button onClick={() => adicionarTarefa(descricaoTarefa, date)}>Adicionar</button>
            </div>
        </div>
    )
}

export default Input;
