export interface IEnterDataModule {
  name: string;
  handleStep: (isNext: boolean) => void;
}