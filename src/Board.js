import React from 'react';
import PropTypes from 'prop-types';

export class TicTacToeBoard extends React.Component{
  static propTypes = {
      G: PropTypes.any.isRequired,
      ctx: PropTypes.any.isRequired,
      moves: PropTypes.any.isRequired,
  }
  
    onClick = (id) => this.props.moves.clickCell(id);

  render(){
  let winner = '';
  if (this.props.ctx.gameover) {
    winner =
      this.props.ctx.gameover.winner !== undefined ? (
        <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
      ) : (
        <div id="winner">Draw!</div>
      );
  }

  const cellStyle = {
    border: '1px solid #555',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
  };

  let tbody = [];
  for (let i = 0; i < 3; i++) {
    let cells = [];
    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;
      cells.push(
        <td key={id}>
          {this.props.G.cells[id] ? (
            <div style={cellStyle}>{this.props.G.cells[id]}</div>
          ) : (
            <button style={cellStyle} onClick={() => this.onClick(id)} />
          )}
        </td>
      );
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div>
      <table id="board">
        <tbody>{tbody}</tbody>
      </table>
      {winner}
    </div>
  );
  }
}
