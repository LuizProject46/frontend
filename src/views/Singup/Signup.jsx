import style from './style.module.css';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import StepOne from './StepOne';
import StepChoice from './StepChoice';
import StepImages from './StepImages';
import { Redirect } from 'react-router-dom';

export default function Signup({history}){
    const [desc, setDesc ] = useState("")
    const [step,setStep] = useState(1)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [inputError,setInputError] = useState({type: '' , message: ''})
    const [genre,setGenre] = useState([
       {id: 1, name: "Rock", chosed: false, color: '#B1387A'},
       {id: 2, name: "Blues", chosed: false, color: '#2E8ACC'},
       {id: 3, name: "Pop", chosed: false, color: '#CC2EC6'},
       {id: 4, name: "Sertanejo", chosed: false, color: '#2ECC77'},
       {id: 5, name: "MPB", chosed: false, color: '#2EB9CC'},
       {id: 6, name: "Metal", chosed: false, color: '#454F51'}
    ])
    const [instruments,setInstruments] = useState([
        {id: 1, name: "Guitarra", chosed: false, color: '#B1387A'},
        {id: 2, name: "Baixo", chosed: false, color: '#2E8ACC'},
        {id: 3, name: "Bateria", chosed: false, color: '#CC2EC6'},
        {id: 4, name: "Violão", chosed: false, color: '#2ECC77'},
        {id: 5, name: "Sanfona", chosed: false, color: '#2EB9CC'},
        {id: 6, name: "Piano", chosed: false, color: '#454F51'}
     ])
    const [selectedGenre,setSelectedGenre] = useState(0)
    const [selectedInstruments,setSelectedInstruments] = useState(0)
    const [disabledBtn,setDisabledBtn] = useState(true)
    const [images, setImages] = useState([])
    const [password, setPassword] = useState('')

    const verifyFields = () => {
        //console.log(desc)
        if(name !== '' && email !== '' && desc !== ''){ 
            setDisabledBtn(false)
        }else{
            setDisabledBtn(true)
        }
    }
    const handleText = (e) => {
        
        let text = e.target.value
        setDesc(text)

        if(text == '') setDesc('')

        verifyFields()
        
        
    }

    const handleButton = () =>{
        if(step <= 5){
            setStep(step + 1)
            setDisabledBtn(true)
        }
        
    }

   const handleBackButton = () =>{
    if(step > 1){
        setStep(step - 1)
        setDisabledBtn(true)
    }else{
        window.location.href = '/login'
    }
   }

    const validateEmail = (email) => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(email) === false) {
            
            setEmail(email)
            setInputError({
                type: 'email',
                message: 'Digite um email válido!'
            })
            
        }
        else {
            setInputError({
                type: '',
                message: ''
            })
            setEmail(email)
            
        }
        if(email == '') setEmail('')
        verifyFields()
    }
    const handleRegister = () => {
       

        history.push('/app')
    }
    const handleSelectGenre = (checkbox) =>{
       
        
        genre.forEach((g) => {
            if(g.id == checkbox.value){
                g.chosed = checkbox.checked
            }
        })
        
        let listSelected = genre.filter(item => item.chosed == true)
    
        if(listSelected.length > 0){
             setSelectedGenre(listSelected.length)
             setDisabledBtn(false)
        }else{
            setDisabledBtn(true)
        }
        
        setSelectedGenre(listSelected.length)
        setGenre([...genre])
       
       
    }
    
    const handleSelectInstruments = (checkbox) =>{
       
        
        instruments.forEach((i) => {
            if(i.id == checkbox.value){
                i.chosed = checkbox.checked
            }
        })
        
        let listSelected = instruments.filter(item => item.chosed == true)
    
        if(listSelected.length > 0){
             setSelectedInstruments(listSelected.length)
             setDisabledBtn(false)
        }else{
            setDisabledBtn(true)
        }
        
        setSelectedInstruments(listSelected.length)
        setInstruments([...instruments])
       
       
    }
    const handleRemoveImg = (e) => {
       

       images.map((_,index) =>{
        
           if(index == e.target.id){
                images.splice(index ,1)
               //console.log(index)
               setImages([...images])
           }
       })

       if(images.length == 0){
           setDisabledBtn(true)
       }

       
    }

    const handleImages = (e) => {
        let image = e.target.files[0]
        

        if(images.length == 4){
            alert("Voce só pode inserir ate 4 imagens")
            return false
        }
        let mimeTypes = [
            'image/jpg',
            'image/jpeg',
            'image/png'
        ]

        if(mimeTypes.includes(image.type)){
            // setImages(...images,image)
            
            setImages([...images,{
                src: URL.createObjectURL(image),
                image: image 
            }])
            
            setDisabledBtn(false)
            
           
        }else{
            alert("Tipo de arquivo não permitido")
        }
        
        
       
    }

    return(
        
        <div className={style.container}>
           
            <div className={style.card__wrapper}>
                
                {step == 1 && (
                    <StepOne 
                        desc={desc.split('').length} 
                        email={email}
                        name={name}
                        error={inputError}
                        handleEmail={(e) => validateEmail(e.target.value)} 
                        handleName={(e) => {
                            setName(e.target.value)
                            if(e.target.value == '') setName('')
                            verifyFields()
                        }} 
                        handleText={(e) => handleText(e)} 
                    
                    />
                )}
                {step == 2 && (
                    
                    <StepChoice
                    list={genre}
                    labelSelected="gênero(s) selecionados"
                    title="Ótimo, agora diga quais os estilos musicais você gosta"
                    event={(e) => handleSelectGenre(e.target)}
                    selected={selectedGenre}
                    />
                )}
                {step == 3 && (
                    <StepChoice
                    list={instruments}
                    title="Perfeito! Qual instrumento você toca?"
                    labelSelected="instrumento(os) selecionados"
                    event={(e) => handleSelectInstruments(e.target) }
                    selected={selectedInstruments}
                    />
                )}
                {step == 4 && (
                    <>
                        <StepImages
                        images={images}
                        handleImages= {(e) => handleImages(e)}
                        remove={(e) => handleRemoveImg(e)}
                        title="Agora está na hora de escolher suas fotos :)"
                        />
                       
                    </>
                
                )}
                {step == 5 && (
                    <div className={style.form__group}>
                        <h2>Para finalizar, escolha sua senha de acesso :)</h2>
                        <input type="password"
                        value={password}
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.values)}
                        />
                        <div className={style.container__btn}>
                            <button className={style.btn__back} onClick={handleBackButton}>Voltar</button>       
                            <button onClick={handleRegister} disabled={password !== '' ? false : true} className={ password !== ''  ? style.btn__continue : style.btn__disabled }> Finalizar</button>
                        </div>
                    </div>
                )}
               
                {step > 5 && (
                    <Redirect to="/login"/>
                )}
                            

                {step < 5 && (
                    <div className={style.container__btn}>
                        <button className={style.btn__back} onClick={handleBackButton}>Voltar</button>       
                        <button onClick={handleButton} disabled={disabledBtn} className={ !disabledBtn ? style.btn__continue : style.btn__disabled }> Continuar</button>
                    </div>
                )}
               
                
            </div>
       
        </div>
    )
}