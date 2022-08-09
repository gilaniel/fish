export default {
  global: ({ colorMode }) => ({
    body: {
      bg: "#f0f0f3",
      color: "black.100",
    },
    form: {
      w: "full",
    },
    a: {
      boxShadow: "none",
      _focus: {
        boxShadow: "none!important",
      },
    },
  }),
};
