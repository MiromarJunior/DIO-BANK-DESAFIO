import { DioAccount } from "./DioAccount";

export class MiroAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value:number):void=>{
    try {
        this.validateStatus();
        this.balance = (this.balance + value +10);
        console.log(`Seu novo saldo é ${this.balance}`);
        
    } catch (error:any) {
        console.error(error.message);
    }


   }
  

}
