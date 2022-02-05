import React, { Component } from "react";

class exercicio extends Component {
  state = {
    nome: "Douglas",
    idade: 18,
    Comida: "Pizza",
    musicas: ["Modo turbo", "Como faz com ela", "How long"]
  };
  render() {
    return (
      <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Mnha idade é {this.state.idade}</h2>
        <h3>Mnha favorita é {this.state.Comida}</h3>
        <h2>Músicas</h2>
        <ol>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ol>
      </div>
    );
  }
}
export default exercicio;

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)
// **Bônus
// Adicione uma imagem da sua fruta favorita via import
