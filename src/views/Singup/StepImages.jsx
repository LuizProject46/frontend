import style from './style.module.css'
import {FaPlus,FaTrashAlt} from 'react-icons/fa'
export default function StepImages({images, title, handleImages, remove}){
    
    return(
        <>
            <h2>{title}</h2>
            <div className={style.card__select__images}>
                <div className={style.card__upload__image}>
                    <form action="">
                        <label htmlFor="image"><FaPlus size={18} color="#621AAB"/></label>
                        <input 
                            id="image" 
                            type="file" 
                            value="" 
                            name="user[images]"  
                            onChange={handleImages}/>
                    </form>

                </div>
                <div className={style.card__list__images}>
                    {images.map((image,index) => (
                        <div key={index} className={style.list__image}>
                            
                            <img src={image.src} />
                            <button id={index} onClick={remove}><FaTrashAlt   color="#ef0e6c"/></button>
                            
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}