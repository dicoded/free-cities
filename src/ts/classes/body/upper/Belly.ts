import Pregnancy from '../../actor/Pregnancy';

interface IBelly {
  /**
   * The size of the body's belly.
   *
   * | **Threshold** | **Size**             |
   * |--------------:|:---------------------|
   * | *100*         | Bloated              |
   * | *1,500*       | Early pregnancy      |
   * | *5,000*       | Obviously pregnant   |
   * | *10,000*      | Very pregnant        |
   * | *15,000*      | Full term            |
   * | *30,000*      | Full term twins      |
   * | *45,000*      | Full term triplets   |
   * | *60,000*      | Full term quads      |
   * | *75,000*      | Full term quints     |
   * | *90,000*      | Full term sextuplets |
   * | *105,000*     | Full term septuplets |
   * | *120,000*     | Full term octuplets  |
   * | *150,000*     | Oversized pregnancy  |
   * | *300,000*     | Hyperpreg state 1    |
   * | *450,000*     | Hyperpreg state 2    |
   * | *600,000*     | Hyperpreg state 3    |
   * | *750,000*     | Hyperpreg state 4    |
   */
  size: number;

  /**
   * The size of the body's belly from fluid distension.
   *
   * | **Threshold** | **Size**                  |
   * |--------------:|:--------------------------|
   * | *100*         | Bloated                   |
   * | *2,000*       | Clearly bloated (~2L)     |
   * | *5,000*       | Very bloated (~1 gal)     |
   * | *10,000*      | Full to bursting (~2 gal) |
   */
  fluid: number;

  /** Properties pertaining to the body's pregnancy. */
  pregnancy: Pregnancy | null;
}

export default class Belly implements IBelly {
  size: number;

  fluid: number;

  pregnancy: Pregnancy | null;

  constructor() {
    this.size = 0;
    this.fluid = 0;
    this.pregnancy = null;
  }
}
