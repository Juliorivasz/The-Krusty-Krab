import PinDropIcon from '@mui/icons-material/PinDrop';
import PropTypes from "prop-types";

export const Ubication = ({ flat }) => {
  return (
    <div className="ubication">
        <p className="enviar-a">Enviar a:</p>
        <div className='iconUbi'>
          <PinDropIcon/>
          <span>{flat}</span>
        </div>
    </div>
  );
};

Ubication.propTypes = {
  flat: PropTypes.string.isRequired,
};
