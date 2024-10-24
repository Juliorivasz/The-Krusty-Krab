import '../../assets/styles/button.css'
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const Button = ({text='Enviar', redirection='#', color='#000', onClick}) => {

  const navigate = useNavigate();

  const goPage = () => {
    if(redirection != '#'){
      navigate(redirection);
    } else if (redirection == '') {
      console.log('funciona');
    } else {
      window.location.reload();
    }
  }

  return (
    <div style={{padding: "0 .5rem"}} onClick={onClick}>
        <button className="button" style={{color: color}} onClick={goPage}>{text}</button>
    </div>
  )
}
