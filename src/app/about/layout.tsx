export const metadata = {
  title: 'About - Riza Adi Kurniawan',
  description:
    'Riza Adi Kurniawan - Mobile Developer with passion for design, coding, and photography.',
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
