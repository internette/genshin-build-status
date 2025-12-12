import { UserSessionProvider } from "./contexts/userSession/userSession";
export default async function Template({
    children
}: {
  children: React.ReactNode
}) {
    return <UserSessionProvider>{children}</UserSessionProvider>;
}