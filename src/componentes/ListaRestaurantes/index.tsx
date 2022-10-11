import axios from 'axios';
import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import IPaginacao from '../../interfaces/IPaginacao';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes]:any = useState()
  const [proximaPagina, setProximaPagina] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/restaurantes/')
      .then(resposta => {
        setRestaurantes(resposta.data.results)

        setProximaPagina(resposta.data.next)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])
  const verMais = () => {
    axios.get<IPaginacao<IRestaurante>>(proximaPagina)
      .then(resposta => {
        setRestaurantes([...restaurantes,  ... resposta.data.results])
        setProximaPagina(resposta.data.next)
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map((item: IRestaurante) => <Restaurante restaurante={item} key={item.id} />)}
    {proximaPagina && <button onClick={verMais}>Ver mais</button>}
  </section>)
}

export default ListaRestaurantes