import { makeAutoObservable } from 'mobx';

class Store {

    constructor() {
        makeAutoObservable(this);
    };

    language: string = 'ru';

    setLanguage(language: string) {
        this.language = language;
    }

}

export const store = new Store();