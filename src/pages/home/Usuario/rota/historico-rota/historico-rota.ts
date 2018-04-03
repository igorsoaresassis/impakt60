import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-historico-rota',
  templateUrl: 'historico-rota.html',
})
export class HistoricoRotaPage {

  swiper: any;
  @ViewChild('slider') slides: Slides;
  slidesOptions = { initialSlide: 0 }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  onIonDrag(event) {
    this.swiper = event;
    this.swiper.lockSwipes();
  }

  slideNext() {
    if (this.swiper) {
      this.swiper.unlockSwipes();
    }
    this.slides.slideNext();
  } 
  slidePreviuos() {
    if (this.swiper) {
      this.swiper.unlockSwipes();
    }
    this.slides.slidePrev();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoRotaPage');
  }

}
