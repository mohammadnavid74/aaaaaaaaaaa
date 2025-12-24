import ErrorApi from "./error/ErrorApi";
import Loading from "./loading/loading";

export interface props {
  status: number;
}
const ExtraPage = ({ status }: props) => {
  return (
    <>
      <div className="fixed h-screen w-sh-screen bg-[image:url('/banner2-md.webp')] z-[1000] bg-cover"></div>
      {status === 404 ? (
        <ErrorApi status={status}></ErrorApi>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};

export default ExtraPage;
