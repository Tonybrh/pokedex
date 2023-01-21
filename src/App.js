import * as C from "./components/styles"
import './App.css';
import { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root")


const App = () => {
  const [pokeName, setPokeName] = useState([]);
  const [poke, setPoke] = useState([]);
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [infoUrl, setInfoUrl] = useState([]);

  useEffect(() => {
    handlePoke()
  }, [])
  useEffect(() => {
    handleInfo()
  }, [])  
  const handlePoke = async () => {
    try {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon');
      let json = await response.json();
      let pokemons = json.results;
      setPoke(pokemons);
      setNext(json.next);
      
      //console.log(pokemons);
    } catch (e) {
      console.log(e)
    }
  }
  const handleNext = async () => {

    let response = await fetch(next);
    let json = await response.json();
    let pokemons = json.results;
    setNext(json.next);
    setPrevious(json.previous)
    setPoke(pokemons);
  }
  const handlePrevious = async () => {
    let response = await fetch(previous);
    let json = await response.json();
    let pokemons = json.results;
    setNext(json.next);
    setPrevious(json.previous)
    setPoke(pokemons);
  }

  const handleInfo = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const data = await response.json();
      const results =  data.results;
      const urlArray = results.map (item => item.url)
      setInfoUrl (urlArray);
    };

  const handleOpenModal = () => {
    setModalOpen(true);

  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="App">
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        overlayClassName="modalOverlay"
        className="modal-content"
      >
        <h1>
          {infoUrl.filter(async ( item,index) => {
            let response = await fetch(item)
            let json = await response.json();
            resturn (json.moves);
          })}
        </h1>
        <div>{pokeName}</div>
      </Modal>
      <C.Container>
        <C.Pokedex>
          <C.Header>
            <C.previousButton onClick={handlePrevious}>Previous</C.previousButton>
            <C.Title>
              Pokedex
            </C.Title>
            <C.nextButton onClick={handleNext}>Next</C.nextButton>
          </C.Header>
          {poke.map((item, index) => (
            <C.pokeItem onClick={handleOpenModal} key={index}>
              {item.name}
            </C.pokeItem>
          ))}
        </C.Pokedex>
      </C.Container>
    </div>

  )
}

export default App;