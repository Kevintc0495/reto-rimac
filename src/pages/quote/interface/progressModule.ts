export interface IProgressModule {
  step: number;
  stepTotal: number;
  handleStep: (isNext: boolean) => void;
}