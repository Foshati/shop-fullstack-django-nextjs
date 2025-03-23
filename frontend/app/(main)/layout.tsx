import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
