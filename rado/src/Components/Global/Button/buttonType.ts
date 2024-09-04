export interface IButton {
    type : "button" | 'submit' | "reset";
    value : string;
    onClick? : ()=>void;
    className : 'btn_primary' | 'btn_secondary'
}