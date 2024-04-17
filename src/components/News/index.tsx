"use client";
import { Button } from "../Button";
import { NewsBodyProps, NewsProps } from "./interface-props";

export const NewsBody: React.FC<NewsBodyProps> = ({ text, title }) => {
  return (
    <>
      <div className="flex flex-row mt-6">
        <span className="text-blue font-bold text-base">{title}</span>
        <div className="ml-3 rounded-full border border-solid px-3 text-xs flex justify-center">
          <span className="text-xs text-center my-auto">Atualização</span>
        </div>
      </div>
      <div className="flex flex-col mt-2">{text}</div>
    </>
  );
};

export const News: React.FC<NewsProps> = ({ values }) => {
  return (
    <>
      <div className="flex flex-col w-4/5 mx-auto mt-16">
        <span className="text-base">Últimas Noticias</span>
        <hr className="w-2/12" />
        {values &&
          values.map((item, k) => (
            <div key={k}>
              <NewsBody text={item.text} title={item.title} />
            </div>
          ))}
        <Button className="mt-10" onClick={(e) => console.log(e)}>
          Ver mais
        </Button>
      </div>
    </>
  );
};
