import { TabContainer } from "@/src/components/TabContainer";
import { CalendarProps, TabContainerComponentProps } from "./interface-props";

export const TabContainerComponent: React.FC<TabContainerComponentProps> = ({
  calendarInfo,
}) => {
  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  interface ArrMonth {
    [month: number]: {
      title: string;
      hours: string;
      description: string;
    }[];
  }

  const eventPerMonth = calendarInfo.reduce(
    (acc: ArrMonth, evento: CalendarProps) => {
      const { month, title, hours, description } = evento;
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push({ title, hours, description });
      return acc;
    },
    {}
  );

  const getElementsCalendar = () => {
    const elements: JSX.Element[] = [];
    for (const month in eventPerMonth) {
      const events = eventPerMonth[parseInt(month)];
      elements.push(
        <div key={`month-${month}`}>
          {events.map((event, index) => (
            <div
              className="flex flex-col my-4 ml-6"
              key={`${month}-${event.title}-${index}`}
            >
              <div className="flex flex-row">
                <span className="text-red font-bold text-base mr-2">
                  {event.title}
                </span>
                <span className="text-gray font-bold text-base">
                  {event.hours}
                </span>
              </div>
              <span className="text-white font-bold text-base">
                {event.description}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return elements;
  };

  return <TabContainer tabsName={month} tabsBody={getElementsCalendar()} />;
};
