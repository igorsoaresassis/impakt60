export class DiariosUsuario {

    constructor(
        public id: string,
        public nome: string,
        public urlArquivo: string,
        public tipoArquivo: string,
        public status: string,
        public retorno: String
    ) { }
}