import { BaseColor } from '../../../util/color';

export enum LipSize {
  THIN = 'thin',
  NORMAL = 'normal',
  PRETTY = 'pretty',
  PLUSH = 'plush',
  HUGE = 'huge',
  FACEPUSSY = 'facepussy',
}

export enum TeethType {
  NORMAL = 'normal',
  CROOKED = 'crooked',
  GAPPED = 'gapped',
  STRAIGHTENING_BRACES = 'straightening braces',
  COSMETIC_BRACES = 'cosmetic braces',
  REMOVABLE = 'removable',
  POINTY = 'pointy',
  FANGS = 'fangs',
  FANG = 'fang',
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

interface Lips {
    /**
     * The color of the body's lips.
     *
     * This includes any makeup the body is wearing.
     */
    color: BaseColor;

    /** The size of the body's lips.
     *
     * One of `Thin`, `Normal`, `Pretty`, `Plush`, `Huge`, or `Facepussy`.
     * Anything `Huge` or above results in a lisp.
     */
    size: LipSize;
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
    accent: AccentType;

    /** Whether the body has had their larynx altered and how. */
    implant: null | VoiceImplant;
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
    lips: Lips;

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
  lips: Lips;

  teeth: ITeeth;

  throat: IThroat;

  taste: boolean;

  tongue: boolean;

  constructor() {
    this.lips = {
      color: BaseColor.PINK,
      size: LipSize.NORMAL,
    };
    this.teeth = {
      color: BaseColor.WHITE,
      type: TeethType.NORMAL,
    };
    this.throat = {
      capacity: 100,
      vocalCords: true,
      voice: {
        type: VoiceType.FEMININE,
        accent: AccentType.ATTRACTIVE,
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
