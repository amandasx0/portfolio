type LayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  header?: boolean;
};

const Layout = ({
  children,
  backgroundColor = "bg-background-primary",
  header,
}: LayoutProps) => {
  return (
    <div
      className={`
    relative w-full overflow-hidden flex flex-col items-center px-4 md:px-0
    ${header ? "min-h-screen justify-center py-20" : "py-8"}
    ${backgroundColor}
  `}
    >
      {children}
    </div>
  );
};

export default Layout;
