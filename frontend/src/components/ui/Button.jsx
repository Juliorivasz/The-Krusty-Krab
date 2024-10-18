import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export const Button = ({text='Enviar', redirection='#', color='#000'}) => {

  const navigate = useNavigate();

  const goPage = () => {
    if(redirection != '#'){
      navigate(redirection);
    }else {
      window.location.reload();
    }
  }

  return (
    <div style={{padding: "0 .5rem"}}>
        <button style={{color: color}} onClick={goPage}>{text}</button>
    </div>
  )
}
