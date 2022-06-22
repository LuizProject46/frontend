import style from './style.module.css'
import {FaCheck, FaFilter} from "react-icons/fa"
import {IconContext} from 'react-icons'
import { useEffect, useState } from 'react'

const {Provider} = IconContext
export default function StepChoice({list, event, selected,title,labelSelected}){
    


    return(
        <>
            <h1 style={{textAlign: 'center', marginBottom: 50}}>{title}</h1>
            <label className={style.label__qtd__items}>{selected + ' ' + labelSelected} </label>
            <div className={style.genrer__div}>
               
                {list.map((value,i) => (
                    
                    <div key={i} className={style.select__genre__btn}>
                        <div className={style.select__genre}>
                            <input id={`checkbox_${value.id}`} name="checkbox" value={value.id} onChange={event}  type="checkbox"/>
                            <label for={`checkbox_${value.id}`} style={{background: value.color}}>
                                {value.chosed ? (
                                   
                                    <FaCheck color="#fff"/>
                                
                                ):(
                                    value.name
                                )}
                            </label>
                            
                        </div>
                       
                        
                    </div>
                    
                ))}
            </div>
        </>
    )
}