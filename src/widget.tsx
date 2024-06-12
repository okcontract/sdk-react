import type React from "react";
import { useEffect, useRef } from "react";
import type { SvelteComponent } from "svelte";

import type { Instance } from "@okcontract/sdk/instance";

import { useInstance } from "./instance";

// @todo move to sdk-svelte
import Widget from "../../../apps/widget/widget.svelte";
import { core } from "./core";

class WidgetElement extends HTMLElement {
	private _mountPoint: HTMLDivElement;
	private _component: SvelteComponent | null;
	private _instance: Instance | null;

	constructor() {
		super();
		this._mountPoint = document.createElement("div");
		this.appendChild(this._mountPoint);
		this._component = null;
		this._instance = null;
	}

	static get observedAttributes() {
		return ["id"];
	}

	connectedCallback() {
		this.initializeComponent();
	}

	attributeChangedCallback(
		name: string,
		_oldValue: unknown,
		newValue: unknown,
	) {
		if (name === "id" && this._component) {
			this._component.$set({ wid: newValue });
		}
	}

	set instance(value: Instance) {
		this._instance = value;
		if (this._component) {
			this._component.$set({ instance: value });
		} else {
			this.initializeComponent();
		}
	}

	get instance() {
		return this._instance;
	}

	initializeComponent() {
		if (!this._component && this._instance) {
			console.log("initializeComponent", { instance: this._instance });
			this._component = new Widget({
				target: this._mountPoint,
				props: {
					wid: this.getAttribute("id"),
					instance: this._instance,
					core,
				},
			});
		}
	}

	disconnectedCallback() {
		if (this._component) {
			this._component.$destroy();
		}
	}
}

export const OKWidget: React.FC<{ id: string }> = ({ id }) => {
	console.log("OKWidget", id);
	const instance = useInstance();
	const widgetRef = useRef<WidgetElement | null>(null);

	useEffect(() => {
		if (!customElements.get("okcontract-widget")) {
			console.log("OKWidget: Define custom element");
			customElements.define("okcontract-widget", WidgetElement);
		}
		if (widgetRef.current && instance) {
			widgetRef.current.instance = instance;
		}
	}, [instance]);

	return <okcontract-widget ref={widgetRef} id={id} />;
};
