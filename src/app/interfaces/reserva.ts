export interface Reserva {
    idReserva:string;
    nomeHospede?:string;
    quarto?: string;
    status?:string;
    situacao?: string;
    numeroHospedes?: number;
    dataChegadaHospede?: Date;
    dataSaidaHospede?: Date;
    observacaoReserva?: string;
    cpfHospede?: number;
    codigoUnidadeHoteleira?: string;
}
