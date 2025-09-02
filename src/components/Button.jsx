import React from 'react';
import PropTypes from 'prop-types';

// Este é o seu componente Button funcional.
// Ele usa as classes CSS que você definiu em globals.css (.btn, .btn-primary, etc.)
export const Button = ({ variant, icon, children, ...props }) => {
  const btnClass = `btn ${variant ? `btn-${variant}` : ''}`;

  return (
    <button type="button" className={btnClass} {...props}>
      {icon && <span className="material-icons-round">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

// Define os tipos das propriedades para boas práticas e documentação
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'alert', 'enterprise']),
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
};