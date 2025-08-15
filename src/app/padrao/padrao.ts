import { Component, signal } from '@angular/core';

type PlayerStatus = {
  vida: number;
  vidaMax: number;
};
const inicialStatus: PlayerStatus = { vida: 3, vidaMax:3};

function atualizarStatus(status: PlayerStatus, delta: number): PlayerStatus{
  const vidaAtuali = Math.max(0, Math.min(status.vida + delta, status.vidaMax));
  return { ...status, vida: vidaAtuali };
}


@Component({
  selector: 'app-padrao',
  imports: [],
  templateUrl: './padrao.html',
  styleUrl: './padrao.css'
})
export class Padrao {
  playerStatus = signal(inicialStatus);

  perderVida(amount: number){
    this.playerStatus.update(status => atualizarStatus(status, -amount));
  }
  curarVida(amount: number){
    this.playerStatus.update(status => atualizarStatus(status, amount));
  }

}
