import { Link, Outlet } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { MutualFund } from "./MF";
import { ELSS } from "./ELSS";
import { NPS } from "./NPS";
export const InvestmentView = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="container">
			<TabView
				activeIndex={activeIndex}
				onTabChange={(e) => setActiveIndex(e.index)}
			>
				<TabPanel header="Mutual Funds">
					<MutualFund />
				</TabPanel>
				<TabPanel header="Equity Linked Schemes">
					<ELSS />
				</TabPanel>
				<TabPanel header="Nation Pension Scheme">
					<NPS />
				</TabPanel>
			</TabView>
		</div>
	);
};