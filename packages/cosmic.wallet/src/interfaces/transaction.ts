export interface ITransaction {
  transactionId: string; // Unique identifier for the transaction
  fromUserId: string; // Sender of the coins (or "system" for minting)
  toUserId: string; // Recipient of the coins
  amount: number; // Amount of coins transferred
  timestamp: Date;
}
