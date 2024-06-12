import type { AnyCell } from "@okcontract/cells";
type UseCellReturnType<T> = T | undefined;
export declare function useCell<T>(cell: AnyCell<T> | null | undefined): UseCellReturnType<T>;
export declare function useCell<T>(cell: AnyCell<T> | null | undefined, defaultValue: T): T;
export {};
