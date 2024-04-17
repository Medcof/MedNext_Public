export interface NewsBodyProps {
  title: string;
  text: string | JSX.Element | JSX.Element[];
}
export interface NewsProps {
  values: NewsBodyProps[];
}
