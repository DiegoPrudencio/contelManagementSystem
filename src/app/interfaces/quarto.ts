import { Diaria } from "./diaria";

export interface Quarto {
    codigoQuarto: number;
	numeroQuarto: string;
	qntCamaCasalQuarto: number;
	qntCamaSolteiroQuarto:number;
    diaria:Diaria;
}
