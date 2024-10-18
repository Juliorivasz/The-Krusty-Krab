import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export const Button = ({text='Enviar', redirection='#', color='#000'}) => {

  const navigate = useNavigate();

  const goPage = () => {
    navigate(redirection);
  }

  return (
    <div>
        <button style={{color: color}} onClick={goPage}>{text}</button>
    </div>
  )
}
