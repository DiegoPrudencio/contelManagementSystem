export interface Reserva {
    situacao: string;
    numeroHospedes: number;
    dataChegadaHospede: Date;
    dataSaidaHospede: Date;
    observacaoReserva: string;
    cpfHospede: number;
    codigoUnidadeHoteleira: string;
}
