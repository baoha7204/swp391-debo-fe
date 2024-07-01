import { AppointmentResponse } from "@/components/Booking/SummaryBooking/hooks/useCreateAppointment";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useLayoutEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";

type RescheduleDataType = {
  id?: string;
  appointment: Omit<AppointmentResponse, "id"> | null;
} | null;

type RescheduleContextType = {
  data: RescheduleDataType;
  setData: Dispatch<SetStateAction<RescheduleDataType>>;
};

const RescheduleContext = createContext<RescheduleContextType>({
  data: null,
  setData: () => null,
});

const RescheduleProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<RescheduleDataType>(null);
  const { id } = useParams();

  useLayoutEffect(() => {
    id &&
      setData({
        id,
        appointment: null,
      });
  }, [id]);

  const value = {
    data,
    setData,
  };

  return (
    <RescheduleContext.Provider value={value}>
      {children}
    </RescheduleContext.Provider>
  );
};

export type { RescheduleDataType, RescheduleContextType };
export { RescheduleContext, RescheduleProvider };
