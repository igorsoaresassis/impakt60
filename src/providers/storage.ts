// import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
// import { Events } from 'ionic-angular';
// import { Service } from "./service";

@Injectable()
export class ProStorage {

    // private tokenValue: String = '';
    // private firstAccessValue: String = '';
    // private user: any = [];

    constructor(
        // public storage: Storage,
        // public events: Events
    ) {

        // this.getToken().then((token) => {
        //     this.tokenValue = token;
        // });

        // this.getFirstAccess().then((value) => {
        //     this.firstAccessValue = value;
        // });

        // this.getUser().then((user) => {
        //     this.user = null;
        //     if (user) {
        //         if (user != null) {
        //             this.user = JSON.parse(user);
        //         }
        //     }
        // });
    }

    // private getToken() {
    //     return this.storage.get('token');
    // }

    // getFirstAccess() {
    //     return this.storage.get('firstAccess');
    // }

    // getUser() {
    //     return this.storage.get('user');
    // }

    // setToken(token) {
    //     this.tokenValue = token;
    //     this.storage.set('token', token).then(() => {
    //         // this.publishUserSavedEvent();
    //     });
    // }

    // deleteUser() {
    //     this.user = null;
    //     this.setToken(null);
    //     // this.setFirstAccess(null);
    //     return this.storage.clear();
    // }
}

