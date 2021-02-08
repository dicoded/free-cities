/** A basic facility. */

interface IFacility {
  name: string;
}

export default class Facility implements IFacility {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
