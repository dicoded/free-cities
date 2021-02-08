import Penis from './Penis';
import Vagina from './Vagina';
import Anus from './Anus';

interface ICrotch {
  /** Properties pertaining to the body's penis, if present. */
  penis: Penis | null;
  /** Properties pertaining to the body's vagina, if present. */
  vagina: Vagina | null;
  /** Properties pertaining to the body's anus. */
  anus: Anus;
}

export default class Crotch implements ICrotch {
  penis: Penis | null;

  vagina: Vagina | null;

  anus: Anus;

  constructor() {
    this.penis = null;
    this.vagina = null;
    this.anus = new Anus();
  }
}
