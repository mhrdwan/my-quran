import { headers } from "next/headers";
import { ReactNode } from "react";
import SideBar from "./component/sideBar/page";
import SidebarBawah from "./component/sideBar/sidebarBawah.tsx/page";
import CardMenuAwal from "./component/card/cardMenuAwal/page";
import { Col, Row } from "antd";
import "./globals.css";


interface HomeProps {
  children: ReactNode;
}



export default function Home({ children }: HomeProps) {
  const cardCount = Array.from({ length: 32 }, (_, index) => index + 1);
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "/";
  console.log("ini route:", pathname);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#334155",
          display: "flex",
          zIndex: 1,
          position: "fixed",
          width: "100%",
        }}
        className="iniSidebar"
      >
        <SideBar />
        <div className="sidebarBawah">
          <SidebarBawah />
        </div>
        <div style={{ padding: 30, width: "100%" }}>
          {/* <ClientInput /> */}
          <div
            style={{
              backgroundColor: "#334155",
              padding: "10px",
              marginTop: 20,
              width: "100%",
              height: "100vh",
              overflow: "scroll",
            }}
            className="scroll-container"
          >
            {pathname === "/" && (
              <>
                {children}
                <div className="hp">
                  {cardCount.map((_, index) => (
                    <Col key={index} style={{ marginTop: 20 }}>
                      <CardMenuAwal />
                    </Col>
                  ))}
                </div>
                <Row gutter={[16, 16]} style={{ backgroundColor: "" }}>
                  {cardCount.map((_, index) => (
                    <Col
                      key={index}
                      md={12}
                      sm={24}
                      xl={6}
                      style={{ marginTop: 20 }}
                    >
                      <CardMenuAwal />
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}