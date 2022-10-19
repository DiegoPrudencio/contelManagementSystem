import { Component, OnInit } from '@angular/core';
import { Indicadores } from 'src/app/interfaces/indicadores';
import { InfoCotacao } from 'src/app/interfaces/infoCotacao';
import { InfoLocais } from 'src/app/interfaces/infoLocais';
import { InfoReserva } from 'src/app/interfaces/infoReserva';
import { Reserva } from 'src/app/interfaces/reserva';
import { ClimaService } from 'src/app/services/clima/clima.service';
import { IndicadorService } from 'src/app/services/indicadores/indicador.service';
import { MoedaService } from 'src/app/services/moeda/moeda.service';
import { ReservaService } from 'src/app/services/reserva/reserva.service';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent implements OnInit {
  reserva!: Reserva;
  reservas!: Reserva[];
  //Inicializa os elementos da tela
  selectCotacao: string = "dolar";
  textCotacaoMoeda: string = "";
  textInformacoesLocais: string = "";
  indicadores!: Indicadores;
  //Array com chegadas e partidas

  proximasChegadas: InfoReserva[] = [];
  proximasPartidas: InfoReserva[] = [];

  //inicilização das varíaveis do elemento pagination
  pageChegadas = 1;
  pagePartidas = 1;
  pageSize = 4;
  collectionSizePartidas = 0;
  collectionSizeChegadas = 0;

  dataServidor = new Date();
  dataAtualS = "" + this.dataServidor.getFullYear() + "-" + (1 + this.dataServidor.getMonth()) + "-" + this.dataServidor.getDate();
  diaSemana = this.dataServidor.getDay();

  constructor(
    private reservaService: ReservaService,
    private climaService: ClimaService,
    private cotacaoService: MoedaService,
    private indicadoresService: IndicadorService
  ) { }

  ngOnInit() {
    this.getCondicoesLocais();
    this.getCotacaoMoeda();
    this.getIndicadores();

    this.pageChegadas = 1;
    this.pagePartidas = 1;
    this.pageSize = 4;
    this.collectionSizePartidas = this.proximasPartidas.length;
    this.collectionSizeChegadas = this.proximasChegadas.length;
  }
  
  getIndicadores() {
    let qntHospedesHotel: Number;
    let capacidadeHotel: Number;
    let receitaDia: Number;
    let despesaDia: Number;
    let diariaMedia: Number;
    let revPar: Number;
    let percentualOcupacao: Number = 0;
    let cnpjHotel = 36984954724880;
    let indicadoresAtuais: Indicadores;
    let novosCancelamentos: Number;
    let novosCadastros: Number;

    this.indicadoresService.getCapacidadeTotalHotel().subscribe(capacidadeHotel => {
      this.indicadoresService.getQntHospedesHospedados(this.dataAtualS).subscribe(qntHospedesHotel => {
        this.indicadoresService.getFinanceiroDiario('receita', this.dataAtualS).subscribe(receitaDia => {
          this.indicadoresService.getFinanceiroDiario('despesa', this.dataAtualS).subscribe(despesaDia => {
            this.indicadoresService.getDiariaMedia(this.diaSemana, this.dataAtualS).subscribe(diariaMedia => {
                this.indicadoresService.getAlteracoesReserva('dataCancelamento', this.dataAtualS).subscribe(novosCancelamentos => {
                  this.indicadoresService.getAlteracoesReserva('dataCadastro', this.dataAtualS).subscribe(novosCadastros => {
                    percentualOcupacao = Number(qntHospedesHotel) / Number(capacidadeHotel);
                    revPar = Number(diariaMedia) * Number(percentualOcupacao);

                    indicadoresAtuais = {
                      taxaOcupacao: percentualOcupacao.toPrecision(2) + "%",
                      revPAR: "R$ " + revPar.toFixed(2),
                      receitas: "R$ " + receitaDia.toFixed(2),
                      novasReservas: novosCadastros.toString(),
                      qntHospedes: qntHospedesHotel.toString(),
                      diariaMedia: "R$ " + diariaMedia.toFixed(2),
                      despesas: "R$ " + despesaDia.toFixed(2),
                      reservasCanceladas: novosCancelamentos.toString(),
                    }
    
                    this.infoIndicadores(indicadoresAtuais);
                })
              })
            })
          })
        })
      });
    })
  }
  getCondicoesLocais() {
    this.climaService.getCondicoesLocais().subscribe((iLocais: InfoLocais) => {
      this.infoLocais(iLocais);
      this.getChegadas(this.dataAtualS);
      this.getSaidas(this.dataAtualS);
    })
  }
  getCotacaoMoeda() {
    this.cotacaoService.getCotacaoMoeda().subscribe((info: InfoCotacao) => {
      this.infoMoeda(info);
    })
  }
  getChegadas(dataAtual: string) {
    this.reservaService.getCheckInOut('dataChegada',this.dataAtualS).subscribe((reservas: Reserva[]) => {
      this.reservas = reservas;
      this.infoChegadas();
    })
  }
  getSaidas(dataAtual: string) {
    this.reservaService.getCheckInOut('dataSaida',this.dataAtualS).subscribe((reservas: Reserva[]) => {
      this.reservas = reservas;
      this.infoPartidas();
    })
  }
  /**
   * Função responsável por identificar e buscar a cotação da moeda.
   * A cotação será disponbilizada por meio de consulta a API
   */
  infoMoeda(info: InfoCotacao) {
    //Identifica a moeda selecionada e retorna a cotação
    switch (this.selectCotacao) {
      case "dolar": this.textCotacaoMoeda = "R$ " + info.currencies.USD.buy; break;
      case "euro": this.textCotacaoMoeda = "R$ " + info.currencies.EUR.buy; break;
      default: this.textCotacaoMoeda = ""; break;
    }
  }
  /**
   * Função responsável por identificar a localização e buscar as informações refernte a data/hora e clima
   * Essa informações serão buscadas por meio de API 
   **/
  infoLocais(info: InfoLocais) {
    this.textInformacoesLocais = "" + info.date + " | " + info.time + " | " + info.city + " | " + info.temp + "°C";
  }
  /**
   * Função responsável por exibir os indicadores de desempenho do hotel.
   * As informações que irão compor esse bloco serão oriundas dos dados armazendos no banco de dados do sistema e seriam obtidas
   * por meio de uma rota oriunda do backend
   */
  infoIndicadores(i: Indicadores) {
    this.indicadores = i;
  }
  /**
  * Função responsável por exibir as informações dos próximos clientes que irão chegar ao hotel.
  * As informações que irão compor esse bloco serão oriundos do banco de dados e serão buscadas por meio de uma rota oriunda do backend
  */
  infoChegadas() {
    for (let i = 0; i < this.reservas.length; i++) {
      this.proximasChegadas.push({ codReserva: String(this.reservas[i].codigoReserva), nomeHospede: this.reservas[i].hospede.nomeHospede, numQuarto: this.reservas[i].quarto.numeroQuarto, situacaoHospede: this.reservas[i].observacaoReserva });
    }
    while ((this.proximasChegadas.length % 4) != 0) {
      this.proximasChegadas.push({ codReserva: "null", nomeHospede: "", numQuarto: "", situacaoHospede: "" });
    }

    this.collectionSizeChegadas = this.proximasChegadas.length;

  }
  /**
  * Função responsável por exibir as informações dos próximos clientes que irão sair do hotel.
  * As informações que irão compor esse bloco serão oriundos do banco de dados e serão buscadas por meio de uma rota oriunda do backend
  */
  infoPartidas() {
    for (let i = 0; i < this.reservas.length; i++) {
      this.proximasPartidas.push({ codReserva: String(this.reservas[i].codigoReserva), nomeHospede: this.reservas[i].hospede.nomeHospede, numQuarto: this.reservas[i].quarto.numeroQuarto, situacaoHospede: this.reservas[i].observacaoReserva });
    }

    while ((this.proximasPartidas.length % 4) != 0) {
      this.proximasPartidas.push({ codReserva: "null", nomeHospede: "", numQuarto: "", situacaoHospede: "" });
    }

    this.collectionSizePartidas = this.proximasPartidas.length;
  }
  /**
  * Função acionada ao clicar o botão "Ir para a reserva"
  * Ao clicar será exibida o detalhamento da reserva do cliente.
  */
  detalharReserva(codReserva: String) {
    alert("Reserva " + codReserva);
  }
}
