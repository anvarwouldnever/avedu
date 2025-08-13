import { makeAutoObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Store {
    language: string = 'ru';
    profileModal: boolean = false;

    setProfileModal(modal: boolean) {
        this.profileModal = modal;
    }
}

export const store = new Store();