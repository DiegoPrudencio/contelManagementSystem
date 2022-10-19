import { Hospede } from "./hospede";
import { Quarto } from "./quarto";

export interface Reserva {
    idReserva:string;
    nomeHospede?:string;
    status?:string;
    situacao?: string;
    numeroHospedes?: number;
    dataChegadaHospede?: Date;
    cpfHospede?: number;
    codigoUnidadeHoteleira?: string;

    codigoReserva?: number;
	situacaoHospede: boolean;
	qntHospede: string;
	dataChegadaHosepde: string;
	dataSaidaHospede: string;
	observacaoReserva: string;
	quarto: Quarto;
	hospede: Hospede;
}
