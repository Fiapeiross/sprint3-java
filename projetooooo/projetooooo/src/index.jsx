import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/header.jsx'; // Importe o componente Header.js
import Main from './componentes/main.jsx'; // Importe o componente Main.js
import Footer from './componentes/footer.jsx'; // Importe o componente Footer.js
import './index.css'; // Importe o arquivo CSS se necessário
ReactDOM.render(<Main />, document.getElementById('root'));


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));