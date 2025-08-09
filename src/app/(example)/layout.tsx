import { AppHeader } from "@/component/feature/app-header/app-header";
import { AppSidebar } from "@/component/feature/app-sidebar/app-sidebar";
import { SidebarAwareMain, SidebarProvider } from "@/context/sidebar-context";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppHeader />
      <AppSidebar />
      <SidebarAwareMain>{children}</SidebarAwareMain>
    </SidebarProvider>
  );
}
