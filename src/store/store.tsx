import { makeAutoObservable } from 'mobx';

class Store {

    language: string = 'ru';
    text: object = {};

    constructor() {
        makeAutoObservable(this);
    };

    setLanguage(language: string) {
        this.language = language;
    }

    setText(text: object) {
        this.text = text;
    }
}

export const store = new Store();