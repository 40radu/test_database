export interface ITextArea {
    onChange : (e : React.ChangeEvent<HTMLTextAreaElement>)=> void;
    value: string;
}