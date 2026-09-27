import RightBar from "@/components/RightBar";
import "./globals.css";
import LeftBar from "@/components/LeftBar";
import { ImageKitProvider } from "@imagekit/next";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html dir="ltr" lang="en">
      <body>
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/oo7jlq4e4n">
          <div className="flex justify-between max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
            
            <div className="px-2 sm:px-4 2xl:px-8">
              <RightBar />
            </div>

            <div className="lg:min-w-150 border-x border-gray-100 flex-1">
              {children}
            </div>

            <div className="hidden lg:flex ml-4 xl:ml-8 flex-1">
              <LeftBar />
            </div>

          </div>
        </ImageKitProvider>
      </body>
    </html>
  );
}