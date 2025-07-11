/**
 * Returns a tagged‐template function for the given translations.
 * @param {Record<string, Record<string, string>>} translations
 *   Maps language codes → key→string tables.
 * @param {string} language
 *   The language code to use.
 * @returns {TagFn}
 *   A function you can use as: localize`key1${"key2"}` → localized string.
 */
function makeLocalizer(translations, language) {
  if (typeof translations !== "object" || translations === null) {
    throw new TypeError("`translations` must be a non-null object");
  }
  if (typeof language !== "string" || !(language in translations)) {
    throw new Error(`Language "${language}" not found in translations`);
  }

  return function localize(strings, ...keys) {
    if (!Array.isArray(strings) || !("raw" in strings)) {
      throw new TypeError("localize must be used as a tagged template");
    }

    return strings.reduce((result, literalSegment, i) => {
      result += literalSegment;
      if (i < keys.length) {
        const key = keys[i];
        const keyStr = String(key);
        const langMap = translations[language];

        if (typeof langMap !== "object" || langMap === null) {
          throw new Error(`No translations defined for language "${language}"`);
        }
        if (!(keyStr in langMap)) {
          throw new Error(
            `Missing translation for key "${keyStr}" in "${language}"`
          );
        }

        result += langMap[keyStr];
      }
      return result;
    }, "");
  };
}

const translations = {
  en: {
    greet: "Hello",
    intro: "Welcome to our website",
  },
  fr: {
    greet: "Bonjour",
    intro: "Bienvenue sur notre site web",
  },
};

try {
    // const language = "en";
  const language = "fr";
  const localize = makeLocalizer(translations, language);

  const greetingKey = "greet";
  const introKey = "intro";

  console.log(localize`${greetingKey}`);
  console.log(localize`~~ ${introKey} ~~`);

  console.log(localize`[${greetingKey}], ${introKey}!`);
} catch (err) {
  console.error("Localization error:", err.message);
}
