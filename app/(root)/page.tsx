import HeaderBox from "@/components/HeaderBox/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Jac", lastName: "Rees" };
  return (
    <section className={"home"}>
      <div className={"home-content"}>
        <header className={"home-header"}>
          <HeaderBox
            type={"greeting"}
            title={"Welcome"}
            user={loggedIn?.firstName || "Guest"}
            subText={
              "Access and manage your account and transactions efficiently"
            }
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={4309.43}/>
        </header>
      </div>
    </section>
  );
};

export default Home;
