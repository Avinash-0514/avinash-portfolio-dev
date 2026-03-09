import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

function PageContainer({ children }: PageContainerProps) {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 24px",
      }}
    >
      {children}
    </div>
  );
}

export default PageContainer;