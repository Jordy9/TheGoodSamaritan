// import { PieCharts } from './pie charts/PieCharts'
import './Dashboard.css'
import { Cards } from './cards/Cards';
import { DepositCard } from './depositcard/DepositCard';
import { DepositModal } from './depositcard/DepositModal';
import { WithdrawalCard } from './withdrawalcard/WithdrawalCard';
import { ReinvestCard } from './reinvestcard/ReinvestCard';
// import { AccountInfo } from './accountinfo/AccountInfo';
// import { TradingView } from './accountinfo/tradingview/TradingView';

export const Dashboard = () => {
    return (
        <>
            <h1 style = {{marginTop: '70px'}}>Inicio</h1>
            <Cards />
            <DepositCard />
            <DepositModal />
            <WithdrawalCard />
            <ReinvestCard />
            {/* <PieCharts />
            <TradingView />
            <AccountInfo /> */}
        </>
    )
}
