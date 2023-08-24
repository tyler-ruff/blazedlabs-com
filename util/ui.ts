
import { ReactElement } from "react";

export interface AccordionItem{
    title: string;
    body: ReactElement
}

export interface AccordionData{
    _id: string;    
    items: AccordionItem[];
}