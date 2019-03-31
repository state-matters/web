import { rgba } from "polished"

export const colors = {
  grey_100: "#fffdfc",
  grey_300: "#f0eeee",
  grey_500: "#cbc8c7",
  grey_700: "#827f7f",
  grey_900: "#1a1919",

  orange_100: "rgb(255, 217, 205)",
  orange_300: "rgb(245, 171, 148)",
  orange_500: "rgb(243, 126, 90)",
  orange_700: "rgb(204, 105, 74)",
  orange_900: "rgb(131, 60, 38)",

  purple_100: "rgb(190, 183, 226)",
  purple_300: "rgb(110, 100, 163)",
  purple_500: "rgb(52, 44, 95)",
  purple_700: "rgb(31, 26, 61)",
  purple_900: "rgb(6, 5, 12)",

  green_300: "rgb(18, 221, 126)",
  green_700: "rgb(11, 148, 84)",

  red_500: "rgb(228, 86, 67)",
  red_700: "rgb(172, 54, 39)"
}

export const apiUrl = "https://statematters.cdn.prismic.io/api/v2"

export const linkResolver = doc =>
  doc.type === "course"
    ? `/course?id=${doc.id}`
    : doc.type === "lesson"
    ? `/lesson?id=${doc.id}`
    : `/`

const colorStops = {
  0: 1,
  19: 0.738,
  34: 0.541,
  47: 0.382,
  56.5: 0.278,
  65: 0.194,
  73: 0.126,
  80.2: 0.075,
  86.1: 0.042,
  91: 0.021,
  95.2: 0.008,
  98.2: 0.002,
  100: 0
}

export const smoothGradient = ({ red, green, blue, deg = 0 }) =>
  Object.keys(colorStops)
    .reduce(
      (acc, curr) => (acc += `${rgba({ red, green, blue, alpha: colorStops[curr] })} ${curr}%,`),
      `${deg}deg, `
    )
    .replace(/(^\s*,)|(,\s*$)/g, "")
