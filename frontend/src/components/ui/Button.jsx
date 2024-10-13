import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export const Button = ({text='Enviar', redirection='#'}) => {

  const navigate = useNavigate();

  const goPage = () => {
    navigate(redirection);
  }

  return (
    <div>
        <button onClick={goPage}>{text}</button>
    </div>
  )
}
