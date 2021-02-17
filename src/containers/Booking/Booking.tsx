import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import './Booking.scss'

//Interface para State
interface Airport {
   nme: string
   sgl: string
   id: number
}

function Booking() {

   //States
   const [airInfo, setAirInfo] = useState<Airport[]>()
   const [clearChecklist, setClear] = useState(1)


   //
   useEffect(() => {
      api.get(`/alert/filter/get?ial=11305004`).then(response => {
         let airports = response.data.fta.lap
         let converted = Object.keys(airports).map((key) => airports[key])//converter object puro para um array 
         setAirInfo(converted)
      })
   }, [])

//Função para lidar com os checkboxes
   function checkboxHandler(id: string, index: number, thisindex: number, fclass: string, sclass: string, reference:string, numreference:number) {
      if (index !== thisindex) { //se o elemento clicado é diferente de Todos os Aeroportos
         let chk = document.getElementById(id)
         if (!chk?.classList.contains(fclass)) { //se o elemento NÃO contém a classe indicando que está selecionado
            setClear(clearChecklist + 1) // conta quantos elementos desse tipo foram clicados 
            if (clearChecklist === numreference) { //limpa o contador caso atinja o número de referencia
               setClear(1)
               let unchk = document.querySelectorAll(`.${fclass}`)
               unchk.forEach((element) => element.classList.remove(fclass))
               let chk = document.querySelectorAll(`.${reference}`)
               chk.forEach((element)=>element.classList.add(sclass)) //remove o check de todos os elementos e add classe ao elemento Todos os Aeroportos
            } else {
               chk?.classList.toggle(fclass)
               let unchk = document.querySelectorAll(`.${sclass}`)
               unchk.forEach((element) => element.classList.remove(sclass)) //remove Todos os aeroportos e add classe ao elemento clicado
            }
         }else if(chk?.classList.contains(fclass)){ // se o elemento CONTÉM  a classe 
            setClear(clearChecklist - 1) // remove 1 do contador ( indica que ele já está selecionado e não deve contar como elemento válido a partir do clique)
               chk?.classList.toggle(fclass)
               let unchk = document.querySelectorAll(`.${sclass}`)
               unchk.forEach((element) => element.classList.remove(sclass))
         }         
      } else if (index === thisindex) { // se o elemento clicado for Todos os Aeroportos
         let unchk = document.querySelectorAll(`.${fclass}`)
         unchk.forEach((element) => element.classList.remove(fclass))
         let chk = document.getElementById(id)
         chk?.classList.toggle(sclass) //remove a classe de todos os outros elementos e adiciona em Todos os Aeroportos
      }
   }



   return (
      <div className="booking">
         <div className="bookme">
            <div className="otitle">
               <h3>Origem</h3>
            </div>
            {airInfo?.map((air, i) => {
               if (air.id === 0 || air.id === 67 || air.id === 277 || air.id === 399) {
                  return (
                     <div key={i} className="list-item">
                        <div className="airp-sgl">
                           <h1>{air.sgl}</h1>
                           <div className="airp-info">
                              <p>{air.nme.split("-")[0]}</p>
                              <p>{air.nme.split("-")[1]}</p>
                           </div>
                        </div>
                        <div onClick={() => checkboxHandler(`chk${i}`, air.id, 0, 'origin', 'origino', 'allOrigin',3)} className={air.id === 0 ? "chk allOrigin" : "chk"} id={`chk${i}`}>
                           <p>o</p>
                        </div>
                     </div>
                  )
               }else{
                  return null
               }
            })}
         </div>
         <div className="bookme">
            <div className="otitle">
               <h3>Destino</h3>
            </div>
            {airInfo?.map((air, i) => {
               if (air.id === 0 || air.id === 2 || air.id === 295) {
                  return (
                     <div key={i} className="list-item">
                        <div className="airp-sgl">
                           <h1>{air.sgl}</h1>
                           <div className="airp-info">
                              <p>{air.nme.split("-")[0]}</p>
                              <p>{air.nme.split("-")[1]}</p>
                           </div>
                        </div>
                        <div onClick={() => checkboxHandler(`chk${i + 200}`, air.id + 200, 200, 'destin', 'destino', 'allDest',2)} className={air.id === 0 ? "chk allDest" : "chk"} id={`chk${i + 200}`}>
                           <p>o</p>
                        </div>
                     </div>
                  )
               }else return null
            })}
         </div>
      </div>

   )
}

export default Booking;