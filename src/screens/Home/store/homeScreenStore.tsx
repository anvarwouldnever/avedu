import { makeAutoObservable, runInAction } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Store {

    childName: string | null = null;
    childSchool: string | null = null;
    childImage: string | null = null;

    constructor() {
        makeAutoObservable(this);
        this.hydrate()
    };

    async hydrate() {
        try {
            const [name, school, image] = await Promise.all([
                AsyncStorage.getItem('childName'),
                AsyncStorage.getItem('childSchool'),
                AsyncStorage.getItem('childImage'),
            ]);

            runInAction(() => {
                this.childName = name;
                this.childSchool = school;
                this.childImage = image;
            });
        } catch (e) {
            console.warn('Ошибка при загрузке Store из AsyncStorage:', e);
        }
    }

    async setChildName(childName: string) {
        this.childName = childName;
        try {
            await AsyncStorage.setItem('childName', childName);
        } catch (e) {
            console.warn('Ошибка сохранения childName:', e);
        }
    }

    async setChildSchool(childSchool: string) {
        this.childSchool = childSchool;
        try {
            await AsyncStorage.setItem('childSchool', childSchool);
        } catch (e) {
            console.warn('Ошибка сохранения childSchool:', e);
        }
    }

    async setChildImage(childImage: string) {
        this.childImage = childImage;
        try {
            await AsyncStorage.setItem('childImage', childImage);
        } catch (e) {
            console.warn('Ошибка сохранения childImage:', e);
        }
    }

}

export const homeScreenStore = new Store();