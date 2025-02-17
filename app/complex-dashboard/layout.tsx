import Notifications from './@notifications/page';
import RevenueMetrics from './@revenue/page';
import UserAnalytics from './@users/page';
export default function ComplexDashboardLayout({
  children,
}:{
  children: React.ReactNode;
}){
  return (
    <>
    <div>{children}</div>
    <UserAnalytics/>
    <RevenueMetrics/>
    <Notifications/>
    </>
  )
}