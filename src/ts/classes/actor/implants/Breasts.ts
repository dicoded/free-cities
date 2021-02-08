import { ImplantType } from '../Implants';

interface IBreastImplants {
  /**
   * How large the body's breast implants are, in cubic centimeters.
   *
   * | **Range**        | **Size** |
   * |-----------------:|:---------|
   * | *0 - 199*        | Small    |
   * | *200 - 399*      | Average  |
   * | *400 - 599*      | Large    |
   * | *600+*           | Huge     |
   */
  size: number | null;

  /** The type of implant installed. */
  type: ImplantType | null;
}

export default class BreastImplants implements IBreastImplants {
  size: number;

  type: ImplantType;

  constructor() {
    this.size = 0;
    this.type = ImplantType.SILICONE;
  }
}
