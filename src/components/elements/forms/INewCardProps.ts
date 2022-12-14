import { Address } from "../../../helpers/typesHelpers";

export interface INewCardProps {
  title: string,
  description: string,
  goal: number,
  releaseDate: number,
  beneficiary: Address,
  amount: number,
};