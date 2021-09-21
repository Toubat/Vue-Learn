import BulletList from "@tiptap/extension-bullet-list";

// customize extension
const CustomBulletList = BulletList.extend({
  addKeyboardShortcuts() {
    return {
      "Mod-l": () => this.editor.commands.toggleBulletList(),
    };
  },
});

export default CustomBulletList;
