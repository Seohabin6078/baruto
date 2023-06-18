import AuthForm from "@/components/molecules/AuthForm";
import HomeHeader from "@/components/organism/HomeHeader";


export default function Home() {
  return (
    <div>
      <HomeHeader />

      {/* 클라이언트 */}
      {/* 내 파티 컴포넌트 */}
      <AuthForm />

    </div>
  )
}
