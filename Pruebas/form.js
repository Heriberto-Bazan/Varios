

var Componente = React.createClass({
  displayName: 'Componente',

  render: function render(){
      return React.createElement(
        'h1',
        null,
        'Comunicaci\xF3n',
        this.props.descripcion
      );
  }
});

var ComponenteFormulario = React.createClass({
  displayName: 'ComponenteFormulario',

  render: function render(){
    return React.DOM.div({
      className: 'form-group',
      children: [React.DOM.label({
        htmlFor: 'exampleInputEmail1',
        children: this.props.etiqueta,
        name: "Lbl" + this.props.nombre
      }), React.DOM.input({
        type: "text",
        className: "form-control",
        name: "txt" + this.props.nombre,
        placeholder: this.props.etiqueta
      })]
    });
  }
});

React.renderComponent(React.createElement(Componente, { descripcion: ' Interna'}), document.getElementById('ejemplo'));
React.renderComponent(React.createElement(ComponenteFormulario, { nombre: 'nombre', etiqueta: 'Ingresa tu Email:'}), document.getElementById('formulario'));
React.renderComponent(React.createElement(ComponenteFormulario, { nombre: 'nombre', etiqueta: 'Ingresa tu Password:'}), document.getElementById('formulario1'));
