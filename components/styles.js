import { rem } from "../global-variables";

export const SMALL_TEXT_SIZE = 0.8 * rem;
export const TEXT_SIZE = rem;

export const COLOR_PRIMARY = "#62fc7a";
export const COLOR_PRIMARY_COMPLEMENT = "#4ae86c";
export const COLOR_LIGHT_GRAY = "#ccc";
export const COLOR_EXTRA_LIGHT_GRAY = "#eee";

export const flexbox = {
  display: "flex",
  flexDirection: "row"
};

export const textInputStyle = {
  fontSize: SMALL_TEXT_SIZE,
  textIndent: 0.2 * rem,
  marginBottom: 0.2 * rem,
  backgroundColor: COLOR_EXTRA_LIGHT_GRAY,
  borderColor: COLOR_LIGHT_GRAY,
  borderStyle: "solid",
  borderWidth: 1
};

export const text = {
  fontSize: rem
};

export const textLarge = {
  fontSize: 1.5 * rem
};

export const textSmall = {
  fontSize: SMALL_TEXT_SIZE
};

export const buttonStyle = {
  flex: 1,
  fontSize: TEXT_SIZE,
  backgroundColor: COLOR_PRIMARY_COMPLEMENT,
  borderRadius: 0.2 * rem,
  borderWidth: 0.1 * rem,
  borderColor: COLOR_PRIMARY,
  borderStyle: "solid"
};
