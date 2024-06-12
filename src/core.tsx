import type React from "react";
import { createContext, useContext } from "react";

import type { Address } from "@okcontract/multichain";
import { Core, type AnyCore } from "@okcontract/sdk";

import { useCell } from "./cell";

export const core = Core();

const CoreContext = createContext<AnyCore>(core);
const WalletContext = createContext<Address<"evm"> | undefined>(undefined);
const VerifiedContext = createContext<boolean>(false);

export const useCore = () => {
	const context = useContext(CoreContext);
	if (!context) {
		throw new Error("CoreContext is required");
	}
	return context;
};

export const useWallet = () => {
	const context = useContext(WalletContext);
	if (context === undefined) {
		throw new Error("WalletContext is required");
	}
	return context;
};

export const useVerified = () => {
	const context = useContext(VerifiedContext);
	if (context === undefined) {
		throw new Error("VerifiedContext is required");
	}
	return context;
};

export const OKContract: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const wallet = useCell(core.WalletID);
	const verified = useCell(core.IsVerified, false);

	return (
		<CoreContext.Provider value={core}>
			<WalletContext.Provider value={wallet}>
				<VerifiedContext.Provider value={verified}>
					{children}
				</VerifiedContext.Provider>
			</WalletContext.Provider>
		</CoreContext.Provider>
	);
};
