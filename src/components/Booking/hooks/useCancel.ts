import appointmentApi from "@/utils/api/appointmentApi";

const useCancelBulk = () => {
  const cancelBulk = async (appointmentIds: string[]) => {
    appointmentIds.forEach(async (id) => {
      await appointmentApi.cancelOne(id);
    });
  };

  return { cancelBulk };
};

export default useCancelBulk;
