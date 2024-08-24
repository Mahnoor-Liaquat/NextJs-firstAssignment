export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1 className="text-5xl text-center">Heading Six</h1>
        {children}
    </>
  );
}
