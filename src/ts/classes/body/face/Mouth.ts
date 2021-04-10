import { BaseColor } from '../../../util/color';

export enum TeethType {
  NORMAL = 'normal',
  CROOKED = 'crooked',
  GAPPED = 'gapped',
  STRAIGHTENING_BRACES = 'straightening braces',
  COSMETIC_BRACES = 'cosmetic braces',
  REMOVABLE = 'removable',
  POINTY = 'pointy',
  FANGS = 'fangs',
  BABY = 'baby',
  MIXED = 'mixed',
}

export enum AccentType {
  ATTRACTIVE = 'attractive',
  HEAVY = 'heavy',
  FOREIGNER = 'does not speak language',
}

export enum VoiceType {
  MUTE = 'mute',
  DEEP = 'deep',
  FEMININE = 'feminine',
  HIGH = 'high',
}

export enum VoiceImplant {
  LOW = 'low',
  HIGH = 'high',
  CYBERNETIC = 'cybernetic',
}

interface ILips {
    /**
     * The color of the body's lips.
     *
     * This includes any makeup the body is wearing.
     */
    color: BaseColor;

    /** The size of the body's lips.
     *
     * | **Range**   | **Description** |
     * |------------:|:----------------|
     * | *0 - 10*    | Thin            |
     * | *11 - 20*   | Normal          |
     * | *21 - -40*  | Pretty          |
     * | *41 - 70*   | Plush           |
     * | *71 - 95*   | Huge            |
     * | *96+*       | Facepussy       |
     *
     * Anything `Huge` or above results in a lisp.
     */
    size: number;
}

interface ITeeth {
    /** The color of the body's teeth. */
    color: BaseColor;

    /** The type of teeth the body has. */
    type: TeethType;
}

interface IVoice {
    /** The type of voice the body has. */
    type: VoiceType;

    /** The type of accent the body has. */
    accent: AccentType | null;

    /** Whether the body has had their larynx altered and how. */
    implant: VoiceImplant | null;
}

interface IThroat {
    /** How much the body's throat can take, in cubic centimeters. */
    capacity: number;

    /** Whether the body has a functioning larynx. */
    vocalCords: boolean;

    /** Properties pertaining to the body's voice */
    voice: IVoice;
}

interface IMouth {
    /** Properties pertaining to the body's lips. */
    lips: ILips;

    /** Properties pertaining to the body's teeth. */
    teeth: ITeeth;

    /** Properties pertaining to the body's throat. */
    throat: IThroat;

    /** Whether the body has a sense of taste. */
    taste: boolean;

    /** Whether the body has a tongue. */
    tongue: boolean;

    /** Whether the body is mute. Always true if `tongue` is false. */
    mute: boolean;
}

export default class Mouth implements IMouth {
  lips: ILips;

  teeth: ITeeth;

  throat: IThroat;

  taste: boolean;

  tongue: boolean;

  constructor() {
    this.lips = {
      color: BaseColor.PINK,
      size: 40,
    };
    this.teeth = {
      color: BaseColor.WHITE,
      type: TeethType.NORMAL,
    };
    this.throat = {
      capacity: 2500,
      vocalCords: true,
      voice: {
        type: VoiceType.FEMININE,
        accent: null,
        implant: null,
      },
    };
    this.taste = true;
    this.tongue = true;
  }

  get mute(): boolean {
    return !this.throat.vocalCords || !this.tongue;
  }
}
