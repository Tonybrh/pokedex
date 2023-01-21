import styled from 'styled-components';





export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #cb6161;
    border-bottom: 1px solid #fff;
    border-radius: 5px 5px 0 0;
`

export const Pokedex = styled.div`
    display: flex;
    width: 300px;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
    text-align: center;
    color: #FFF;
    height: 50px;
    width: 100%;
    margin: 0;

`

export const pokeItem = styled.li `
    list-style: none;
    width: 100%;
    text-align: center;
    background-color: #cb6161;
    color: #fff;
    border-bottom: 1px solid #fff;
    &:hover{
        transition: transform 0.3s;
        transform: scale(1.05);
        background-color:white;
        color: #cb6161;
        border: 2px solid #cb6161;
        cursor: pointer;
    }
    &::first-letter{
        text-transform: uppercase;
    }
`
export const nextButton = styled.button`
    width: 60px;
    height: 20px;
    margin-right: 10px;
    background-color: #cb6161;
    background-color: #cb6161;
    border: none;
    color:#fff;
    &:hover{
        transition: transform 0.3s;
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const previousButton = styled.button`
    width: 60px;
    height: 20px;
    background-color: #cb6161;
    border: none;
    color:#fff;
    margin-left: 10px;
    &:hover{
        transition: transform 0.3s;
        transform: scale(1.1);
        
        cursor: pointer;
    }
`

export const Info = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`