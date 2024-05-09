import AppRoutes from "@/Routes/AppRoutes";
import QueryForm from "@/Components/HomeComponents/QueryForm/QueryForm";

function App() {
  return (
    <>
      {/* <AppRoutes></AppRoutes> */}
      <section className="max-w-[1200px] w-full bg-Bg  h-screen mx-auto text-white">
        <QueryForm></QueryForm>
       
      </section>
    </>
  );
}

export default App;
