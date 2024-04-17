export interface TabContainerComponentProps{
    calendarInfo: CalendarProps[]
}

export interface CalendarProps{
    month:number;
    title:string;
    hours:string;
    description:string;
}