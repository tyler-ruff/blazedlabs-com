export interface IActionButton{
    label: string;
    url: string;
    target?: string;
};

export interface IHero{
    title: string;
    body: string;
    action: IActionButton;
};