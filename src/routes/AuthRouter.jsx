import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Dashboard } from '../Components/dashboard/Dashboard';
import { Navb } from '../Components/navbar/Navb';
import { Container } from 'react-bootstrap';
import { Plans } from '../Components/plans/Plans';
import { Referred } from '../Components/referred/Referred';
import { Reports } from '../Components/reports/Reports';
import { subscriptions } from '../Components/subscriptions/subscriptions';
import { Invoices } from '../Components/invoices/Invoices';
import { PayOuts } from '../Components/payouts/PayOuts';
import { WithdrawalScreen } from '../Components/payouts/withdrawal/WithdrawalScreen';
import { Profile } from '../Components/profile/Profile';

export const AuthRouter = () => {
    return (
        <>
        <Navb />
        <Container>
            <Switch>
                <Route path = '/Dashboard' component = {Dashboard} />
                <Route path = '/Plans' component = {Plans} />
                <Route path = '/Referred' component = {Referred} />
                <Route path = '/Reports' component = {Reports} />
                <Route path = '/subscriptions' component = {subscriptions} />
                <Route path = '/Invoices' component = {Invoices} />
                <Route path = '/PayOuts' component = {PayOuts} />
                <Route path = '/Withdrawal' component = {WithdrawalScreen} />
                <Route path = '/Profile' component = {Profile} />

                <Redirect to = '/Dashboard' />
            </Switch>
        </Container>
    </>
    )
}
