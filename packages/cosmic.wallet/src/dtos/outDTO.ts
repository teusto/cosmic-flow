import { ITransaction } from "../interfaces/transaction";

export interface outDTO {
    userID: string;
    balance: number;
    transaction: ITransaction;
}