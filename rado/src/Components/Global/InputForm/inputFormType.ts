export interface IInputForm {
    placeholder : 'email' | 'name';
    name : 'email' | 'name';
    type : 'text' | 'email';
    value: string;
    onChange : (e : React.ChangeEvent <HTMLInputElement> ) => void
}