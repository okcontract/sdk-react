import type React from "react";
import type { Address } from "@okcontract/multichain";
import { type AnyCore } from "@okcontract/sdk";
export declare const core: import("@okcontract/sdk").CoreExecution<import("@wagmi/connectors").Connector<unknown, unknown>>;
export declare const useCore: () => AnyCore;
export declare const useWallet: () => Address<"evm">;
export declare const useVerified: () => boolean;
export declare const OKContract: React.FC<{
    children: React.ReactNode;
}>;
