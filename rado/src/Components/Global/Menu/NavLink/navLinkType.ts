export interface INavLink {
    text : 'about' | 'skills' | 'contact' | 'home' | 'project';
    href : string;
    onClick : ()=>void
}