import HeaderBox from "@/components/HeaderBox";
import Totalbalancebox from "@/components/Totalbalancebox";
import RightSidebar from "@/components/RightSidebar";
const home = () => {
  const loggedIn = {
    firstName: "Mark",
    lastName: "jsm",
    email: "contact@yimminglu.pro",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "guest"}
            subtext="Access and manage your account and transacations efficiently"
          />

          <Totalbalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500 }]}
      ></RightSidebar>
    </section>
  );
};

export default home;
