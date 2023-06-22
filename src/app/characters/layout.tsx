import MainLayout from "@/layouts/Main";

export default function CharacterDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
