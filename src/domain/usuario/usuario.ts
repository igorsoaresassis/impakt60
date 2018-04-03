export class Usuario {

    constructor(
        public id: String,
        public retorno: String,
        public tipo: String,
        public possui_equipe: String,
        public possui_informacoes: String,
        public possui_contrato: String,
        public possui_exame: String,
        public possui_whoqol: String, 
        public possui_parq: String, 
        public possui_termo: String,
        public possui_pesos_medidas: String,
        public possui_partes_corpo: String,
        public id_semana: String,
        public id_equipe: String
    ) { }
}