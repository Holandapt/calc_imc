import styles from './Classifica.module.css'

const Classifica = (({imc}) => {
    
    // Variavel que vai obter a classe
    let classe = '';
    let cor = ''
    
    // condições para classificação do IMC
    if(!imc){
        return null
    }else if (imc < 18.5) {
        classe='Magro'
        cor = styles.magro;
    } else if (imc >= 18.5 && imc < 24.9) {
        classe='Peso Normal'
        cor = styles.normal
    } else if (imc >= 25 && imc < 29.9){
        classe = 'Sobrepeso'
        cor = styles.sobrepeso
    } else if (imc >= 30 && imc < 39.9){
        classe = 'Obeso'
        cor = styles.obeso
    } else  if (imc >= 40) {
        classe = 'Obesidade Grave'
        cor = styles.obesidadeGrave
    }

    return (
        <>
            <div className={`${styles.resultado} ${cor}`}>
                <span>
                    {imc && <p className={styles.resultadoImc}>Seu IMC: {imc.toFixed(2)} </p>}
                    {imc && <p>{classe}</p>}
                </span>
            </div>  
        </>
    )
})

export default Classifica;