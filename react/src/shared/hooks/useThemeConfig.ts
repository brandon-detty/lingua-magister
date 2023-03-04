/**
It's untenable to keep classes used in various components in sync. (e.g. using 'p-4' and 'pr-4' in
two different components makes it difficult to ensure that a change in standard padding is applied
everywhere) Tailwind won't recognize `p-${sharedPaddingSizeVar}`, so complete class names are being
used in this shared config.

Classes should be added lazily to prevent bundling too much CSS.
**/
const useThemeConfig = () => ({
  padding: {
    p: "p-4",
    pr: "pr-4",
  },
});

export default useThemeConfig;
