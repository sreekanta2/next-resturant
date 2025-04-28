import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
export const metadata = {
  title: "account",
};
export default function ShaaredLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
