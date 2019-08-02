export class Product {
  id: string;
  name: string;
  currentPrice: number;
  lastUpdate: number;

    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.currentPrice = props.currentPrice;
        this.lastUpdate = props.lastUpdate;
    }

}
