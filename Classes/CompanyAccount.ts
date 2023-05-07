import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{

    constructor(name:string,accountNumber:number){
        super(name,accountNumber);
    }

    getLoan =(value:number)=>{
        try {
            this.validateStatus();
            
            console.log(`Você pegou um emprestimo no valor de ${value}\n`);
            this.deposit(value);
          

            
        } catch (error) {
            
        }

    }
}
