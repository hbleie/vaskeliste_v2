
import './App.css';
import styled from 'styled-components';
import oppgaver from './trekkOppgaver';

function App() {
  return (
    <ScreenContainer>
      <Header>
        <Oppdatert> Uke nummer {sistOppdatert}</Oppdatert>
      </Header>
      <Body>
        <Text1> Vemund</Text1>
        <Text2> {oppgave1}</Text2>


      </Body>
      <Body2>
        <Text1> Håkon</Text1>
        <Text2> {oppgave2} </Text2>
      </Body2>
      <Body3>
        <Text1>Gustav</Text1>
        <Text2> {oppgave3} </Text2>
      </Body3>
    </ScreenContainer>
  );
}
function finnOppgave(number) {
  return oppgaver[number];
}

const sistOppdatert = finnOppgave(0);
const oppgave1 = finnOppgave(1);
const oppgave2 = finnOppgave(2);
const oppgave3 = finnOppgave(3);

const ScreenContainer = styled.div`
    grid-template-rows: 5vh repeat(4, 1fr) 5vh;
    display: grid;
    column-gap: 1vw;
    row-gap: 1vh;
    @media (max-width: 1200px) and (min-height: 700px) {
      grid-template-columns: 5vw repeat(3, 1fr) 5vw;
    grid-template-areas:
    ". . . . ."
        ". body body body ."
        ". body2 body2 body2 ."
        ". body3 body3 body3 ."
        ". header header header ."
        ". . . . .";
    }
    @media (min-width: 1200px), (max-height: 700px) {
      grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
    ". . . . ."
        ". . . . ."
        ". body body2 body3 ."
        ". . . . ."
        ". header header header ."
        ". . . . .";
    };
    height: 100vh;
    width: 100vw;
`


const Header = styled.div`
  grid-area: header;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1px;
    display: grid;
    column-gap: 10px;
    row-gap: 15px;
    grid-template-areas:
        "oppd . .";

`
const Oppdatert = styled.div`
  grid-area: oppd;
   color: aliceblue;
   @media (max-width: 1200px) and (min-height: 700px) {
    font-size: 3vw;
   }
    @media (min-width: 1200px), (max-height: 700px) {
    font-size: 1.5vw;
    }
  place-self: center center;
`
const Body = styled.div`
  grid-area: body;
  border-radius: 100px;
  border: 2px solid darkolivegreen;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  display: grid;
  column-gap: 1px;
  row-gap: 1px;
  grid-template-areas:
  "text1"
  "text2 ";
  
`

const Text1 = styled.div` 
 grid-area: text1;
   color: aliceblue;
   @media (max-width: 1200px) and (min-height: 700px){
  font-size: 7vw;
  place-self: center center;
}
  @media (min-width: 1200px), (max-height: 700px){
  font-size: 2vw;
    place-self: center center;
  }
    font-size: 7vw;
    margin-top: 2vh;
    border-bottom: 0.2vh solid white;
    border-radius: 5px;
`
const Body2 = styled.div`
  grid-area: body2;
  border-radius: 100px;
  border: 2px solid darkblue;
grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  display: grid;
  column-gap: 1px;
  row-gap: 1px;
  grid-template-areas:
  "text1"
  "text2 ";
  
`
const Text2 = styled.div`
   grid-area: text2;
   color: aliceblue;
   place-self: start center;
   @media (max-width: 1200px) and (min-height: 700px){
  font-size: 7vw;
}
  @media (min-width: 1200px), (max-height: 700px){
  font-size: 1.6vw;
 
  }
   `
const Body3 = styled.div`
  grid-area: body3;
  border-radius: 100px;
  border: 2px solid darkgoldenrod;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  display: grid;
  column-gap: 1px;
  row-gap: 1px;
  grid-template-areas:
  "text1"
  "text2 ";
  
  
`

export default App;
