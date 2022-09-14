import { Component, OnInit } from '@angular/core';
import { Indicadores } from 'src/app/interfaces/indicadores';
import { Reserva } from 'src/app/interfaces/reserva';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent implements OnInit {
//Inicializa os elementos da tela
selectCotacao: string="dolar";
textCotacaoMoeda: string="";
textInformacoesLocais: string="";
indicadores!:Indicadores;
//Array com chegadas e partidas
proximasChegadas: Reserva[]=[];
proximasPartidas: Reserva[]=[];

  constructor() { }

  ngOnInit(): void {
    this.infoMoeda();
    this.infoGerais();
    this.infoIndicadores();
    this.infoChegadas();
    this.infoPartidas();
  }

  /**
   * Função responsável por identificar e buscar a cotação da moeda.
   * A cotação será disponbilizada por meio de consulta a API
   */
  infoMoeda(){
    //Identifica a moeda selecionada e retorna a cotação
    switch(this.selectCotacao){
      case "dolar": this.textCotacaoMoeda = "R$ 5,20";break;
      case "euro": this.textCotacaoMoeda = "R$ 6,30";break;
      default:  this.textCotacaoMoeda = "";break;
    }
  }

  /**
   * Função responsável por identificar a localização e buscar as informações refernte a data/hora e clima
   * Essa informações serão buscadas por meio de API 
   **/
  infoGerais(){
    this.textInformacoesLocais = "03/09/2022 11:23 Cricíuma 27°C";
  }

  /**
   * Função responsável por exibir os indicadores de desempenho do hotel.
   * As informações que irão compor esse bloco serão oriundas dos dados armazendos no banco de dados do sistema e seriam obtidas
   * por meio de uma rota oriunda do backend
   */
  infoIndicadores(){
    this.indicadores={
      taxaOcupacao: "0.0%",
      revPAR: "R$ 0,00",
      receitas: "R$ 0,00",
      novasReservas: "0",
      qntHospedes:"0",
      diariaMedia:"R$ 0,00",
      despesas:"R$ 0,00",
      reservasCanceladas:"0",
    }
  }

   /**
   * Função responsável por exibir as informações dos próximos clientes que irão chegar ao hotel.
   * As informações que irão compor esse bloco serão oriundos do banco de dados e serão buscadas por meio de uma rota oriunda do backend
   */
  infoChegadas(){
    this.proximasChegadas.push({idReserva:"001", nomeHospede:"Diego", quarto: "01",status:"Reservado"});
    this.proximasChegadas.push({idReserva:"002", nomeHospede:"Luis", quarto: "02",status:"Check-in Realizado"});
    this.proximasChegadas.push({idReserva:"003", nomeHospede:"Ricardo", quarto: "03",status:"Check-in Realizado",});
    this.proximasChegadas.push({idReserva:"004", nomeHospede:"Gean", quarto: "04",status:"Reservado",});
    this.proximasChegadas.push({idReserva:"004", nomeHospede:"Gean", quarto: "04",status:"Reservado",});

     //garante que haverá pelo menos quatro linhas na tabela de chegadas
     while(this.proximasChegadas.length <4){
      this.proximasChegadas.push({idReserva:"null", nomeHospede:"", quarto: "",status:""}); 
    }
  }

   /**
   * Função responsável por exibir as informações dos próximos clientes que irão sair do hotel.
   * As informações que irão compor esse bloco serão oriundos do banco de dados e serão buscadas por meio de uma rota oriunda do backend
   */
  infoPartidas(){
    this.proximasPartidas.push({idReserva:"005", nomeHospede:"Rafael", quarto: "05",status:"Hospedado"});
    this.proximasPartidas.push({idReserva:"006", nomeHospede:"Ronaldo", quarto: "06",status:"Check-Out Realizado"});


    //garante que haverá pelo menos quatro linhas
    while(this.proximasPartidas.length <4){
      this.proximasPartidas.push({idReserva:"null", nomeHospede:"", quarto: "",status:""}); 
    }
  }

   /**
   * Função acionada ao clicar o botão "Ir para a reserva"
   * Ao clicar será exibida o detalhamento da reserva do cliente.
   */
  detalharReserva(idReserva:String){
    alert("Reserva "+idReserva);
  }
}
