import { observable, computed, action} from "mobx";

class UIStore {
    @observable exList: Array<any> =  [123, 321, 123, 123, 123, 123];
    @observable activeMenu: string = 'index';

    @action setActiveMenu = (index: string) =>{
        this.activeMenu = index
    }

    @action setExList = (value: Array<any>) => {
        this.exList = value
    }
}

export default UIStore