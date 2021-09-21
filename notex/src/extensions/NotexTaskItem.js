import TaskItem from "@tiptap/extension-task-item";

const CustomTaskItem = TaskItem.extend({
  content: "inline*",
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleTaskItem(),
    };
  },
});

export default CustomTaskItem;
