class BaseComponent {
    constructor () {
        if (this.constructor === BaseComponent){
            throw new Error ('невозможно создать экземпляр абстрактного класса BaseComponent')
        }
    }

    getProxyState(initialState) {
        return new Proxy(initialState, {
            get: (targer, prop) =>{
                return targer[prop]
            },

            set: (targer, prop, newValue) =>{
                const OldValue = targer[prop]


                targer[prop] = newValue

                if (newValue !== OldValue){
                    this.updateUI()
                }

                return true
            },
        })
    }
    
    updateUI() {
        throw new Error('необходимо реализовать метод updateUI')
    }
}

export default BaseComponent 