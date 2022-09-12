import Itarefa from '../../../types/tarefa'
import style from '../Lista.module.scss'

interface props {
  item: Itarefa,
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Item({item, selecionaTarefa}: props){
  return (
    <li 
    className={style.item}
    onClick={() => selecionaTarefa(item)}
    >
      <h3> {item.tarefa} </h3>
      <span> {item.tempo} </span>
    </li>
  )
}
