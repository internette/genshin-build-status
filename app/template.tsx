import { UserSessionProvider } from "./contexts/userSession/userSession";
import { CharactersSessionProvider } from "./contexts/charactersSession/charactersSession";
export default async function Template({
    children
}: {
  children: React.ReactNode
}) {
    return <UserSessionProvider>
        <CharactersSessionProvider>{children}</CharactersSessionProvider>
    </UserSessionProvider>;
}