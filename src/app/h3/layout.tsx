export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1 className="text-5xl text-center">Heading Three </h1>
        {children}
  </>
  );
}
