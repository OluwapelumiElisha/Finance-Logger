import { HasFormatter } from '../interfaces/HasFormatter.js'
export class Payment implements HasFormatter{
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    constructor (
        readonly recipient : string,
        private details : string,
        public amount : number
    ){}
    
      format(){
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
      }
    }