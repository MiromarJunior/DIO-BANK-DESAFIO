export abstract class DioAccount{
    private readonly name:string;
    private readonly accountNumber:number;
    protected balance: number = 0;

    private status: boolean = true

   constructor(name:string,accountNumber:number){
       this.name = name;
       this.accountNumber = accountNumber;
   }



   getName =():string =>{
    return this.name;
   }

   getAccountNumber =():number =>{
    return this.accountNumber;
   }

   deposit = (value:number):void=>{
    try {
        this.validateStatus();
        this.balance = (this.balance + value);
        console.log(`Seu novo saldo é ${this.balance}`);
        
    } catch (error:any) {
        console.error(error.message);
    }


   }

   whithdraw = (value:number):void=>{
    try {
        this.validateStatus();
    this.validateBalance(this.balance,value);
    this.balance = (this.balance - value);
    console.log(`Seu novo saldo é ${this.balance}`);
        
    } catch (error:any) {
        console.error(error.message);
        
    }
    
    
   }

   getBalance =():void=>{
       console.log(this.balance);
   }

   validateStatus = (): void => {
    if (this.status === false) {
        throw new Error('Conta inválida')
    }

   
  }

  private validateBalance = (balance:number,value:number):void=>{

    if(balance < value) throw new Error("Valor de Saque superior ao saldo!");

   }

   private updateBalance =()=>{

   }

   
}