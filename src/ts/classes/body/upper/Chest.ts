import { BaseColor } from 'util/color';

export enum ChestShape {
  NORMAL = 'normal',
  PERKY = 'perky',
  SAGGY = 'saggy',
  TORPEDO_SHAPED = 'torpedo-shaped',
  DOWNWARD_FACING = 'downward-facing',
  WIDE_SET = 'wide-set',
  DEFLATED = 'deflated',
}

export enum AreolaeSize {
  NORMAL = 'normal',
  LARGE = 'large',
  UNUSUALLY_WIDE = 'unusually wide',
  HUGE = 'huge',
  MASSIVE = 'massive',
}

export enum NippleSize {
  PARTIALLY_INVERTED = 'partially inverted',
  INVERTED = 'inverted',
  TINY = 'tiny',
  CUTE = 'cute',
  PUFFY = 'puffy',
  HUGE = 'huge',
  FUCKABLE = 'fuckable',
}

interface IAreolae {
  /** The areolae's color. */
  color: BaseColor;

  /**
   * The areolae's size.
   *
   * One of `normal`, `large`, `unusually wide`, `huge`, or `massive`.
   */
  size: AreolaeSize;
}

interface INipples {
  /** The nipple's color. */
  color: BaseColor;

  /**
   * The nipple's size.
   *
   * One of `partially inverted`, `inverted`, `tiny`, `cute`, puffy`, `huge`, or `fuckable`.
   */
  size: NippleSize;

  /** Whether the body's nipples are producing milk. */
  lactating: boolean;
}

interface IChest {
  /**
   * How large the body's chest is, in cubic centimeters.
   *
   * | **Threshold** | **Size**          |
   * |--------------:|:------------------|
   * | *0*           | flat              |
   * | *300*         | A-cup             |
   * | *400*         | B-cup             |
   * | *500*         | C-cup             |
   * | *650*         | D-cup             |
   * | *800*         | DD-cup            |
   * | *1,000*       | F-cup             |
   * | *1,200*       | G-cup             |
   * | *1,400*       | H-cup             |
   * | *1,600*       | I-cup             |
   * | *1,800*       | J-cup             |
   * | *2,050*       | K-cup             |
   * | *2,300*       | L-cup             |
   * | *2,600*       | M-cup             |
   * | *2,900*       | N-cup             |
   * | *3,250*       | O-cup             |
   * | *3,600*       | P-cup             |
   * | *3,950*       | Q-cup             |
   * | *4,300*       | R-cup             |
   * | *4,700*       | S-cup             |
   * | *5,100*       | T-cup             |
   * | *5,500*       | U-cup             |
   * | *6,500*       | V-cup             |
   * | *7,000*       | X-cup             |
   * | *7,500*       | Y-cup             |
   * | *8,000*       | Z-cup             |
   * | *8,500*       | Obscenely massive |
   * | *15,000*      | Arm filling       |
   * | *25,000*      | Figure dominating |
   * | *40,000*      | Beanbag sized     |
   * | *55,000*      | Door jamming      |
   * | *70,000*      | Hall clearing     |
   * | *90,000*      | Hall jamming      |
   */
  size: number;

  /** The shape of the body's chest, or breasts, if present. */
  shape: ChestShape;

  /** Properties pertaining to the body's areolae. */
  areolae: IAreolae;

  /** Properties pertaining to the body's nipples. */
  nipples: INipples;
}

export default class Chest implements IChest {
  size: number;

  shape: ChestShape;

  areolae: IAreolae;

  nipples: INipples;

  constructor() {
    this.size = 500;
    this.shape = ChestShape.NORMAL;
    this.areolae = {
      color: BaseColor.PINK,
      size: AreolaeSize.NORMAL,
    };
    this.nipples = {
      color: BaseColor.PINK,
      size: NippleSize.TINY,
      lactating: false,
    };
  }
}
