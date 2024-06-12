declare namespace JSX {
	interface IntrinsicElements {
		"okcontract-widget": React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLElement>,
			HTMLElement
		> & { id?: string; instance?: Instance };
	}
}
