export class MensagemRetorna {

    constructor(
        public id_cadastro: String,
        public mensagem: String,
        public dataCadatro: String,
        public urlArquivo: String,
        public extArquivo: string,
        public retorno: string
    ) { }
}