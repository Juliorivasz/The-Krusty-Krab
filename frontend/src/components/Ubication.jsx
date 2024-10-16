import PropTypes from "prop-types";

export const Ubication = ({ flat }) => {
  return (
    <div>
      <a>
        <p>Enviar a:</p>
        <span>{flat}</span>
      </a>
    </div>
  );
};

Ubication.propTypes = {
  flat: PropTypes.string.isRequired,
};
