import { IsNotEmpty, IsPhoneNumber, NotEquals } from 'class-validator';
export class DelayedPaymentJ4J5Body {
  @IsNotEmpty()
  pageCode!: string;

  @IsNotEmpty()
  sum!: number;

  description: string | undefined;

  @IsNotEmpty()
  fullName!: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone!: string;

  @IsNotEmpty()
  catalog_number!: number;

  @NotEquals(0)
  @IsNotEmpty()
  quantity!: number;

  @NotEquals(0)
  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  item_description!: string;
}

export class SettleSuspendedTransactionBody {
  @IsNotEmpty()
  transactionId!: number;

  @IsNotEmpty()
  transactionToken!: string;

  @IsNotEmpty()
  sum!: number;

  @IsNotEmpty()
  catalog_number!: number;

  @NotEquals(0)
  @IsNotEmpty()
  quantity!: number;

  @NotEquals(0)
  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  item_description!: string;
}
