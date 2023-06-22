import MainLayout from "@/layouts/Main";

export default function ComicDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
