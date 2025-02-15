import HeaderBox from "@/components/HeaderBox/HeaderBox";
import RightSidebar from "@/components/RightSidebar/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Jac", lastName: "Rees", email: "jacroystonrees1@gmail.com" }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={4230}
          />
        </header>

       
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.00}]}
      />
    </section>
  )
};

export default Home;
