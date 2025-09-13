import { Alert } from "react-native";
import { navigationReset } from "./navigationReset";

export const alertHandler = () => {
    Alert.alert("Соединение прервано", "Проверьте подключение к сети и попробуйте снова",
        [
            {
                text: "ОК",
                onPress: () => navigationReset("Home"),
            },
        ]
    );
};