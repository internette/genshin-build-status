import UuidInputForm from "./components/uuidInputForm/uuidInputForm";
import { UserSessionProvider } from "./contexts/userSession/userSession";
export default function Home() {
  
  return (
    <UserSessionProvider>
      <UuidInputForm />
    </UserSessionProvider>
  );
}
