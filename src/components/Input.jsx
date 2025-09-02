import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ label, placeholder, error, helpText, disabled, ...props }) => {
  // Define a classe do input dinamicamente com base na propriedade 'error'
  const inputClasses = `form-input ${error ? 'form-input--error' : ''}`;
  // Define a classe do texto de ajuda dinamicamente com base na propriedade 'error'
  const helpTextClasses = `form-help-text ${error ? 'form-help-text--error' : ''}`;

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.id || label}>
        {label}
      </label>
      <input
        type="text"
        className={inputClasses}
        id={props.id || label}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      {/* Lógica para mostrar o texto de ajuda ou a mensagem de erro */}
      {(helpText || error) && (
        <span className={helpTextClasses}>{error || helpText}</span>
      )}
    </div>
  );
};

// Definição das propriedades (props) para o Storybook e para boas práticas de desenvolvimento
Input.propTypes = {
  /**
   * ID único para o campo de input.
   */
  id: PropTypes.string,
  /**
   * O rótulo que aparece acima do campo de input. É obrigatório.
   */
  label: PropTypes.string.isRequired,
  /**
   * O texto que aparece dentro do campo antes do usuário digitar.
   */
  placeholder: PropTypes.string,
  /**
   * Mensagem de erro a ser exibida. Ativa o estilo de erro do campo.
   */
  error: PropTypes.string,
  /**
   * Texto de ajuda a ser exibido abaixo do campo.
   */
  helpText: PropTypes.string,
  /**
   * Desabilita o campo de input se for 'true'.
   */
  disabled: PropTypes.bool,
};