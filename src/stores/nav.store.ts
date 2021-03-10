import { writable } from 'svelte/store';

export interface ILink {
  href: string;
  text: string;
  handler: (() => any) | null;
}

/**
 * The default link.
 * Returns to the main menu, with no handler function defined.
 *
 * Use `null` for no link.
 */
export const defaultLink: ILink = {
  href: 'main',
  text: 'Back to Main',
  handler: null,
};

const componentArr: any[] = [];
const propArr: any[] = [];

/** The link to display in the sidebar. */
export const link = writable<ILink|null>(defaultLink);

/** Any additional components to display in the sidebar. */
export const components = writable(componentArr);

/** Any properties for the components in the sidebar. */
export const props = writable(propArr);
