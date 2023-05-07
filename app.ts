/**
 *   ts-node / ts-node-dev / npx tsc --init / npm i typescript
 * Criar uma conta bancaria onde tenha 2 parametros :
 * Nome da pessoa, Nr da conta
 * 
 * Também terá duas funçoes :
 * Depositar, Sacar
 */


import { CompanyAccount } from "./Classes/CompanyAccount";
import { MiroAccount } from "./Classes/MiroAccount";

const newAction = new MiroAccount("Miromar",37);

const newCompany = new CompanyAccount("Alex",25);
newCompany.getLoan(500);


console.log("Tentativa de Deposito");
newAction.deposit(50);

 console.log("Tentativa de Saque");
 newAction.whithdraw(50);








