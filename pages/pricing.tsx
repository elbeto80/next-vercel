import DarkLayout from "../Components/Layouts/DarkLayout";
import MainLayout from "../Components/Layouts/MainLayout";

export default function PricingPage() {
  return (
    <>
      <p className={"title"}>Pricing page</p>
      <p>
        Get started by editing <code className={"code"}>pages/pricing.js</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
