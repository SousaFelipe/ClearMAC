import AsyncStorage from "@react-native-async-storage/async-storage";



const PIN_KEY = '@local_mac:PIN';
const SSL_KEY = '@local_mac:SSL';



const keys = {

    PIN_KEY,
    SSL_KEY
    
};



async function load(key: string, json: boolean = true) : Promise<any> {
    try {
        const item = await AsyncStorage.getItem(key);

        if (item) {
            return json ? JSON.parse(item) : item;
        }

        return null;
    }
    catch(error: any) {
        console.error(error);
        return null;
    }
}



async function save(key: string, data: any, json: boolean = true) : Promise<boolean> {
    try {
        const item = json ? JSON.stringify(data) : data;
        await AsyncStorage.setItem(key, item);
        return (load(key) != null);
    }
    catch(error: any) {
        console.error(error);
        return false;
    }
}



async function remove(key: string) : Promise<boolean> {
    try {
        await AsyncStorage.removeItem(key);
        return (load(key) == null);
    }
    catch(error: any) {
        console.error(error);
        return false;
    }
}



async function clear() : Promise<void> {
    await AsyncStorage.removeItem(keys.PIN_KEY);
}



export default {

    load,
    save,
    remove,
    clear,

    keys: keys

} as const;
