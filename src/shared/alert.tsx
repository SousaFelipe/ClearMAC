import { Alert as Parent } from "react-native";



class Alert {
    


    constructor(

        private title: string,
        private message: string,
        private okCallback?: Function | null

    ) { }



    public onOK(okCallback: Function) {
        this.okCallback = okCallback;
        return this;
    }



    public show() {
        Parent.alert(
            this.title, 
            this.message, 
            [
                { text: '' },

                {
                    text: 'OK',
                    onPress: () => {
                        if (this.okCallback) {
                            this.okCallback();
                        }
                    }
                }
            ]);
    }
}



export function alert(title: string, message: string) : Alert {
    return new Alert(title, message);
}
