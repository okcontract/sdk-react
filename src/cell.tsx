import { useEffect, useState } from "react";

import type { AnyCell } from "@okcontract/cells";

type UseCellReturnType<T> = T | undefined;

export function useCell<T>(
	cell: AnyCell<T> | null | undefined,
): UseCellReturnType<T>;
export function useCell<T>(
	cell: AnyCell<T> | null | undefined,
	defaultValue: T,
): T;
export function useCell<T>(
	cell: AnyCell<T> | null | undefined,
	defaultValue?: T,
): UseCellReturnType<T> {
	const [value, setValue] = useState<T | undefined>(defaultValue);

	useEffect(() => {
		if (cell === null || cell === undefined) {
			setValue(defaultValue);
			return;
		}

		const unsubscribe = cell.subscribe((newValue: T | Error) => {
			if (newValue instanceof Error) {
				console.error(newValue);
				return;
			}
			setValue(newValue);
		});

		return () => {
			unsubscribe();
		};
	}, [cell, defaultValue]);

	return value as UseCellReturnType<T>;
}
