import styled, {keyframes} from "styled-components";
//import Keyframes from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`
const Component = styled.div`
  padding: 25px 150px;
`

const Button = styled.button`
  transitions: box-shadow 0.2s easy;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white': 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  &: hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3);
  }
  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white;
  }
  .info{
    font-size: 28px;
  }
`

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  `

const Link = ({ className, ...props }) => {
  return <a className={className} {...props} ></a>
}

const StyledLink = styled(Link)`
  color: blue;
`
const Input = styled.input.attrs( props => ({
  type:'text',
  color: props.color || 'red',
}))`
  font-zise: 20px;
  border: 1px solid red;
  color: ${props =>props.color};
`
const Password = styled(Input).attrs({
  type: 'password'
})``

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`

const App = () => {
  return (
    <Component>
      <P>Hola soy un parrafo </P>
      <Button>Enviar<p className="info">Info</p></Button>
      <Button primary> Enviar </Button>
      <Button className="secondary"> Enviar </Button>
      <BlockButton primary as="a" href="#"> Enviar </BlockButton>
      <Link > Link </Link>
      <StyledLink > Link con estilo </StyledLink>
      <Input/>
      <Password/>
      <br/>
      <Rotar>Estoy girando</Rotar>
    </Component>
  );
}

export default App
