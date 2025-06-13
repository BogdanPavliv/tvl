import 'normalize.css';
import type { Metadata } from "next";
import PagesLayout from './components/layouts/PagesLayout';
import './globalStyles/normalize.css'
import "./globalStyles/null.css";
import "./globalStyles/globals.scss";
import './globalStyles/header.scss';
import './globalStyles/footer.scss';

export const metadata: Metadata = {
  title: "TVL — Choose Your Favorite Tour To Explore",
  description: "TVL is a platform that allows you to choose your favorite tour to explore. Discover new places and experiences with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PagesLayout>{children}</PagesLayout>
}
