import { createBrowserRouter, Navigate } from "react-router-dom";
import { IsloginGuard } from "../_guards/LoginGuard";
import AppDashBoard from "../pages/AppDashBoard";
import AppOutlet from "../components/subcomponents/AppOutlet";
import AppoutletVerify from "../_guards/AppoutletVerify";
import Accounts from "../components/accounts/Accounts";
import AccountStatements from "../components/accounts/AccountStatement";
import AccountWithdraw from "../components/accounts/AccountWithdraw";
import AccountStakeButton from "../components/accounts/AccountStakeButton";
import AccountTranscation from "../components/accounts/AccountTranscation";
import AccountBonusList from "../components/accounts/AccountBonusList";
import AccountOpenBets from "../components/accounts/AccountOpenBets";
import Deposit from "../components/subcomponents/Deposit";
import Casino from "../components/casino/Casino";
import Promotion from "../components/subcomponents/Promotion";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppDashBoard />,
        children: [
            {
                index: true,
                element: <Navigate to="/sport/Inplay" />,
            },
            {
                path: "/sport/Inplay",
                element: <AppOutlet />
            },
            {
                path: "/sport/upcoming",
                element: (
                    <AppoutletVerify>
                        <AppOutlet />
                    </AppoutletVerify>
                ),
            },
            {
                path: "/sport/cricket",
                element: (
                    <AppoutletVerify>
                        <AppOutlet />
                    </AppoutletVerify>
                ),
            },
            {
                path: "/sport/Tennis",
                element: (
                    <AppoutletVerify>
                        <AppOutlet />
                    </AppoutletVerify>
                ),
            },
            {
                path: "/sport/FootBall",
                element: (
                    <AppoutletVerify>
                        <AppOutlet />
                    </AppoutletVerify>
                ),
            },
            {
                path: "/sport/Jackpot",
                element: (
                    <AppoutletVerify>
                        <AppOutlet />
                    </AppoutletVerify>
                ),
            },
            {
                path: "/sport/Cricket Casino",
                element: (
                    <AppoutletVerify>
                        <AppOutlet />
                    </AppoutletVerify>
                ),
            },
            {
                path: "/sport/Election",
                element: (
                    <AppoutletVerify>
                        <AppOutlet />
                    </AppoutletVerify>
                ),
            },
            {
                path: "/account",
                element: (
                    <IsloginGuard>
                        <Accounts />
                    </IsloginGuard>
                ),
                children: [
                    {
                        index: true,
                        path: "/account/user-profile",
                        element: <AccountStatements />
                    },
                    {
                        path: "/account/account-statement",
                        element: <AccountStatements />
                    },
                    {
                        path: "/account/account-withdraw",
                        element: <AccountWithdraw />
                    },
                    {
                        path: "/account/change-stakeButton",
                        element: <AccountStakeButton />
                    },
                    {
                        path: "/account/transaction-history",
                        element: <AccountTranscation />
                    },
                    {
                        path: "/account/bonus",
                        element: <AccountBonusList />
                    },
                    {
                        path: "/account/open-bets",
                        element: <AccountOpenBets />
                    }
                ]
            },
            {
                path: "/user/deposit",
                element: (
                    <IsloginGuard>
                        <Deposit />
                    </IsloginGuard>
                )
            },
            {
                path: "/casino",
                element: <Casino/>
            },
            {
                path: "/promotion",
                element: <Promotion/>
            }
        ],
    },

    {
        path: "*",  // Catch-all route for 404
        element: <h1>Not Found!!</h1>,
    },
]);

export default router;