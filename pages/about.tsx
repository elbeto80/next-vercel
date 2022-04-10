import DarkLayout from "../Components/Layouts/DarkLayout";
import MainLayout from "../Components/Layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <p className={"title"}>About</p>
      <p>
        Get started by editing <code className={"code"}>pages/about.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
