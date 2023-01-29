const colors = require("./colors");
const reset = (str) => str + "\x1b[0m";

const Use = require("./use");

class BetterLogs extends Use {
	/* Regular Colors */

	green(str) {
		str = colors.regularColors.Green + str;
		return reset(str);
	}

	red(str) {
		str = colors.regularColors.Red + str;
		return reset(str);
	}

	black(str) {
		str = colors.regularColors.Black + str;
		return reset(str);
	}

	blue(str) {
		str = colors.regularColors.Blue + str;
		return reset(str);
	}

	yellow(str) {
		str = colors.regularColors.Yellow + str;
		return reset(str);
	}

	purple(str) {
		str = colors.regularColors.Purple + str;
		return reset(str);
	}

	cyan(str) {
		str = colors.regularColors.Cyan + str;
		return reset(str);
	}

	white(str) {
		str = colors.regularColors.White + str;
		return reset(str);
	}

	/* Bold Colors */

	bGreen(str) {
		str = colors.boldColors.Green + str;
		return reset(str);
	}

	bRed(str) {
		str = colors.boldColors.Red + str;
		return reset(str);
	}

	bBlack(str) {
		str = colors.boldColors.Black + str;
		return reset(str);
	}

	bBlue(str) {
		str = colors.boldColors.Blue + str;
		return reset(str);
	}

	bYellow(str) {
		str = colors.boldColors.Yellow + str;
		return reset(str);
	}

	bPurple(str) {
		str = colors.boldColors.Purple + str;
		return reset(str);
	}

	bCyan(str) {
		str = colors.boldColors.Cyan + str;
		return reset(str);
	}

	bWhite(str) {
		str = colors.boldColors.White + str;
		return reset(str);
	}

	/* Underline Colors */

	uGreen(str) {
		str = colors.underlineColors.Green + str;
		return reset(str);
	}

	uRed(str) {
		str = colors.underlineColors.Red + str;
		return reset(str);
	}

	uBlack(str) {
		str = colors.underlineColors.Black + str;
		return reset(str);
	}

	uBlue(str) {
		str = colors.underlineColors.Blue + str;
		return reset(str);
	}

	uYellow(str) {
		str = colors.underlineColors.Yellow + str;
		return reset(str);
	}

	uPurple(str) {
		str = colors.underlineColors.Purple + str;
		return reset(str);
	}

	uCyan(str) {
		str = colors.underlineColors.Cyan + str;
		return reset(str);
	}

	uWhite(str) {
		str = colors.underlineColors.White + str;
		return reset(str);
	}

	/* Bold underline */

	bgbreen(str) {
		str = colors.boldUnderlineColors.Green + str;
		return reset(str);
	}

	ubRed(str) {
		str = colors.boldUnderlineColors.Red + str;
		return reset(str);
	}

	ubBlack(str) {
		str = colors.boldUnderlineColors.Black + str;
		return reset(str);
	}

	ubBlue(str) {
		str = colors.boldUnderlineColors.Blue + str;
		return reset(str);
	}

	ubYellow(str) {
		str = colors.boldUnderlineColors.Yellow + str;
		return reset(str);
	}

	ubPurple(str) {
		str = colors.boldUnderlineColors.Purple + str;
		return reset(str);
	}

	ubCyan(str) {
		str = colors.boldUnderlineColors.Cyan + str;
		return reset(str);
	}

	ubWhite(str) {
		str = colors.boldUnderlineColors.White + str;
		return reset(str);
	}

	/* Bright Colors */

	lGreen(str) {
		str = colors.brightColor.Green + str;
		return reset(str);
	}

	lRed(str) {
		str = colors.brightColor.Red + str;
		return reset(str);
	}

	lBlue(str) {
		str = colors.brightColor.Blue + str;
		return reset(str);
	}

	lYellow(str) {
		str = colors.brightColor.Yellow + str;
		return reset(str);
	}

	lPurple(str) {
		str = colors.brightColor.Purple + str;
		return reset(str);
	}

	lCyan(str) {
		str = colors.brightColor.Cyan + str;
		return reset(str);
	}

	lWhite(str) {
		str = colors.brightColor.White + str;
		return reset(str);
	}

	/* Bright Undeline */

	ulGreen(str) {
		str = colors.brightUnderlineColor.Green + str;
		return reset(str);
	}

	ulRed(str) {
		str = colors.brightUnderlineColor.Red + str;
		return reset(str);
	}

	ulBlue(str) {
		str = colors.brightUnderlineColor.Blue + str;
		return reset(str);
	}

	ulYellow(str) {
		str = colors.brightUnderlineColor.Yellow + str;
		return reset(str);
	}

	ulPurple(str) {
		str = colors.brightUnderlineColor.Purple + str;
		return reset(str);
	}

	ulCyan(str) {
		str = colors.brightUnderlineColor.Cyan + str;
		return reset(str);
	}

	ulWhite(str) {
		str = colors.brightUnderlineColor.White + str;
		return reset(str);
	}

	/* Bold Bright Colors */

	blGreen(str) {
		str = colors.boldBrightColor.Green + str;
		return reset(str);
	}

	blRed(str) {
		str = colors.boldBrightColor.Red + str;
		return reset(str);
	}

	blBlack(str) {
		str = colors.boldBrightColor.Black + str;
		return reset(str);
	}

	blBlue(str) {
		str = colors.boldBrightColor.Blue + str;
		return reset(str);
	}

	blYellow(str) {
		str = colors.boldBrightColor.Yellow + str;
		return reset(str);
	}

	blPurple(str) {
		str = colors.boldBrightColor.Purple + str;
		return reset(str);
	}

	blCyan(str) {
		str = colors.boldBrightColor.Cyan + str;
		return reset(str);
	}

	blWhite(str) {
		str = colors.boldBrightColor.White + str;
		return reset(str);
	}

	/* Background */

	bgGreen(str) {
		str = colors.backgroundColor.Green + str;
		return reset(str);
	}

	bgRed(str) {
		str = colors.backgroundColor.Red + str;
		return reset(str);
	}

	bgBlack(str) {
		str = colors.backgroundColor.Black + str;
		return reset(str);
	}

	bgBlue(str) {
		str = colors.backgroundColor.Blue + str;
		return reset(str);
	}

	bgYellow(str) {
		str = colors.backgroundColor.Yellow + str;
		return reset(str);
	}

	bgPurple(str) {
		str = colors.backgroundColor.Purple + str;
		return reset(str);
	}

	bgCyan(str) {
		str = colors.backgroundColor.Cyan + str;
		return reset(str);
	}

	bgWhite(str) {
		str = colors.backgroundColor.White + str;
		return reset(str);
	}

	/* Bold Background */

	bgbGreen(str) {
		str = colors.boldBackgroundColor.Green + str;
		return reset(str);
	}

	bgbRed(str) {
		str = colors.boldBackgroundColor.Red + str;
		return reset(str);
	}

	bgbBlack(str) {
		str = colors.boldBackgroundColor.Black + str;
		return reset(str);
	}

	bgbBlue(str) {
		str = colors.boldBackgroundColor.Blue + str;
		return reset(str);
	}

	bgbYellow(str) {
		str = colors.boldBackgroundColor.Yellow + str;
		return reset(str);
	}

	bgbPurple(str) {
		str = colors.boldBackgroundColor.Purple + str;
		return reset(str);
	}

	bgbCyan(str) {
		str = colors.boldBackgroundColor.Cyan + str;
		return reset(str);
	}

	bgbWhite(str) {
		str = colors.boldBackgroundColor.White + str;
		return reset(str);
	}

	/* Bright Background */

	bglGreen(str) {
		str = colors.brightBackgroundColors.Green + str;
		return reset(str);
	}

	bglRed(str) {
		str = colors.brightBackgroundColors.Red + str;
		return reset(str);
	}

	bglBlack(str) {
		str = colors.brightBackgroundColors.Black + str;
		return reset(str);
	}

	bglBlue(str) {
		str = colors.brightBackgroundColors.Blue + str;
		return reset(str);
	}

	bglYellow(str) {
		str = colors.brightBackgroundColors.Yellow + str;
		return reset(str);
	}

	bglPurple(str) {
		str = colors.brightBackgroundColors.Purple + str;
		return reset(str);
	}

	bglCyan(str) {
		str = colors.brightBackgroundColors.Cyan + str;
		return reset(str);
	}

	bglWhite(str) {
		str = colors.brightBackgroundColors.White + str;
		return reset(str);
	}
}

const betterLogs = new BetterLogs();
module.exports = betterLogs;
