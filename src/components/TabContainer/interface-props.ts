export interface HeaderTabProps {
  isActive: boolean;
  onClick: () => void;
  children: string;
}
export interface TabContentProps {
  isActive: boolean;
  children: JSX.Element;
}

export interface TabContainerProps {
  tabsName: string[];
  tabsBody: JSX.Element[]
}
