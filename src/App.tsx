import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {

  const [textoFrase, setTextoFrase] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        "Somos o que fazemos repetidamente. Excelência não é um ato, mas sim um hábito.",
        "Faça sempre o seu melhor!",
        "A palavra “impossível” foi inventada para ser desafiada.",
        "Os dias difíceis são a forma mais rápida de aprendermos a apreciar os bons.",
        "A coragem está um passo à frente do medo.",
        "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
        "Não há a necessidade de caminhar rápido. Apenas siga caminhando.",
        "Em meio ao caos, respire fundo.",
        "Não existem batalhas impossíveis para quem está disposto a nunca desistir.",
      ]
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        "Que seu dia seja leve e doce. Que traga amor, sorrisos e energia positiva.",
        "Você é especial para mim, então merece um bom dia exclusivo e cheio de carinho",
        "A capacidade de enxergar a beleza em cada amanhecer é um alimento que nos dá energia para o dia todo.",
        "Que hoje seja um dia repleto de alegria, sorrisos e conquistas. ",
        "Bom dia, meu raio de sol. A cada manhã você ilumina ainda mais o meu despertar.  ",
      ]
    },
    {
      id: 3,
      nome: 'Shakespeare',
      frases: [
        "O amor é cego, por isso os namorados nunca vêem as tolices que praticam.",
        "O amor é cego, por isso os namorados nunca vêem as tolices que praticam.",
        "Os homens deviam ser o que parecem ou, pelo menos, não parecerem o que não são.",
        "Há mais perigo em teus olhos do que em vinte espadas!",
        "A verdade nunca perde em ser confirmada.",
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`" ${allFrases[categoriaSelecionada].frases[numeroAleatorio]} "`)
  }

  return (
      <div className='container'>
        <img 
        src={logoImg} 
        alt="Logo Frases" 
        className='logo'
        />

        <h2 className='title'>Categorias</h2>

        <section className='category-area'>
          {allFrases.map((item, index) => (
            <button 
            key={item.id} 
            className='category-button' 
            style={{
              borderWidth: item.nome === allFrases [categoriaSelecionada].nome ? 2 : 0, 
              borderColor: "#1fa4db"}}
              onClick={ () => handleSwitchCategory(index)}
              >
              
              {item.nome}
            </button>
          ))}
          
        </section>

        <button className='button-frase' onClick={gerarFrase}>Gerar Frase</button>

        {textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>} 


      </div>
    
  )
}

export default App
