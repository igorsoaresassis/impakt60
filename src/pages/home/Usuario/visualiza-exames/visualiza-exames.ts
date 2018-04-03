import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { VisualizaExamesService } from '../../../../domain/tipo-usuario/visualizaExame/visualiza-exames';


@Component({
  selector: 'page-visualiza-exames',
  templateUrl: 'visualiza-exames.html',
})
export class VisualizaExamesPage implements OnInit {

  public id: string
  public colesterol_hdl: any
  public colesterol_total: any
  public colesterol_ldl: any
  public triglicerides: any
  public pressao_arterial: any
  public glicose: any
  public hemograma_hemacias: any
  public hemograma_hematocrito: any
  public hemograma_hemoglobina: any
  public hemograma_leucocitos: any
  public hemograma_plaquetas: any

  constructor(public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
    private _serviceVisualizaExame: VisualizaExamesService, 
    public navParams: NavParams) {
  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Exames realizados. Aguarde ...'
    });

    loader.present();

    this._serviceVisualizaExame
      .retornaExames(this.id)
      .then(exame => {
        this.colesterol_total = exame.colesterol_total
        this.colesterol_hdl = exame.colesterol_hdl
        this.colesterol_ldl = exame.colesterol_ldl
        this.triglicerides = exame.triglicerides
        this.pressao_arterial = exame.pressao_arterial
        this.glicose = exame.glicose
        this.hemograma_hemacias = exame.hemograma_hemacias
        this.hemograma_hematocrito = exame.hemograma_hematocrito
        this.hemograma_hemoglobina = exame.colesterol_total
        this.hemograma_leucocitos = exame.colesterol_total
        this.hemograma_plaquetas = exame.colesterol_total
        loader.dismiss();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizaExamesPage');
  }

}
