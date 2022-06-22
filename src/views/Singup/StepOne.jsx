
import style from './style.module.css';
export default function StepOne({handleText, handleEmail, handleName, name, email, error}){
    return(
        <>
            <h1>Que tal falar um pouco sobre você?</h1>
            <div className={style.form__group}>
                <input  type="text" placeholder="Nome" value={name} onChange={handleName}/>
                {error.type === 'email' && email !== "" && (
                    <label className={style.label__input__error}>{error.message}</label>
                )}
                <input style={
                    {borderBottomColor: (error.type === 'email' && email !== "") ? ('red') : '#621AAB'}} 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={handleEmail}
                />
            </div>
            <textarea onChange={handleText}  rows="10" placeholder="Descrição">

            </textarea>
            
        </>
    )
}