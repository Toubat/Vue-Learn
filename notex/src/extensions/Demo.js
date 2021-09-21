import { Node } from "@tiptap/core";

const CustomExtension = Node.create({
  name: "custom_extension",
  defaultOptions: {},
  addAttributes() {},
  parseHTML() {},
  renderHTML({ node, HTMLAttributes }) {},
  addCommands() {},
  addKeyboardShortcuts() {},
  addInputRules() {},
  // and more …
});
