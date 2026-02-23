import { useState } from 'react';
import styles from './FormularioImc.module.css';

// Criando estados;
const Medidas = (({renderizaImc}) => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [erro, setErro] = useState('');

    // Captura o click;
    const handlerSubmit = (e) => {
        e.preventDefault();

        // Verifica se o numero é valido, se não for mostra erro;
        if (peso <= 0 || altura <= 0) {
            setErro("Digite números válidos")
        }
        // Se o numero for valido, renderiza o IMC;
        else {
            setErro('')
            renderizaImc(peso, altura)
        }
    } 
    
    return (
        <>
                <form onSubmit={handlerSubmit}>
                    <div className={styles.entradas}>
                        <label className={styles.label}>Peso (kg):</label>
                        <input className={styles.entrada} value={peso} type="number" placeholder="Ex:75kg" required onChange={evento => setPeso(evento.target.value)}/>
                        <label className={styles.label}>Altura (m):</label>
                        <input className={styles.entrada} value={altura} type="number" placeholder="Ex:1.75" required onChange={evento => setAltura(evento.target.value)}/>
                        <button className={styles.button} type="submit">Calcule</button>
                    </div>
                </form>
                <div className={styles.resultado}>
                    {erro && <p className={styles.erro}>{erro}</p>}           
                </div>
        </> 
    )
}) 

export default Medidas;