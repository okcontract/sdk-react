import type React from "react";
import { createContext, useContext, useEffect, useRef } from "react";

import { Instance } from "@okcontract/sdk";

import { core } from "./core";

const InstanceContext = createContext<Instance | null>(null);

export const useInstance = () => {
	const context = useContext(InstanceContext);
	if (context === undefined) {
		throw new Error("InstanceContext is required");
	}
	return context;
};

export const OKInstance: React.FC<{
	children: React.ReactNode;
}> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	console.log("OKInstance: Called");

	const instanceRef = useRef<Instance | null>(null);

	if (instanceRef.current === null) {
		console.log("OKInstance: Create");
		instanceRef.current = new Instance(core);
	}

	useEffect(() => {
		return () => {
			console.log("OKInstance: Destroy");
			instanceRef.current?.destroy();
		};
	}, []);

	return (
		<InstanceContext.Provider value={instanceRef.current}>
			{children}
		</InstanceContext.Provider>
	);
};
