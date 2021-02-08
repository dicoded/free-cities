interface String {
  /**
   * Capitalizes the first letter of the given string.
   */
  capitalize(): string;

  /**
   * Returns whether the given string is empty.
   */
  isEmpty(): boolean;
}

String.prototype.capitalize = function capitalize(this: string): string {
  return this.charAt(0).toUpperCase() + this.substr(1);
};

String.prototype.isEmpty = function isEmpty(this: string): boolean {
  return !this || this.length === 0;
};
