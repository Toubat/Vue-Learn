<template>
  <EditorContent :editor="editor" />
  <code>
    {{ editor && editor.getJSON() }}
  </code>
  <button @click="setJson">Set JSON</button>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import Document from "@tiptap/extension-document";
import StarterKit from "@tiptap/starter-kit";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import NotexList from "@/extensions/NotexList";
import NotexTaskItem from "@/extensions/NotexTaskItem";
import Paper from "@/nodes/Paper.js";

export default {
  components: {
    EditorContent,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  watch: {
    modelValue(value) {
      const isSame = this.editor.getHTML() === value;

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(this.modelValue, false);
    },
  },
  mounted() {
    this.editor = new Editor({
      content: this.modelValue,
      extensions: [
        Document.extend({
          content: "paper",
        }),
        StarterKit,
        Dropcursor,
        Image,
        NotexList,
        NotexTaskItem,
        Paper,
      ],
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getHTML());
      },
    });
    // this.setJson();
  },
  beforeUnmount() {
    this.editor.destroy();
  },
  methods: {
    setJson() {
      this.$emit("update:modelValue", {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text:
                  "Try to drag around the image. While you drag, the editor should show a decoration under your cursor. The so called dropcursor.",
              },
            ],
          },
          { type: "paragraph", content: [{ type: "text", text: "ad" }] },
          { type: "paragraph", content: [{ type: "text", text: "a" }] },
          { type: "paragraph", content: [{ type: "text", text: "d" }] },
          { type: "paragraph", content: [{ type: "text", text: "a" }] },
          {
            type: "image",
            attrs: {
              src: "https://source.unsplash.com/8xznAGy4HcY/800x400",
              alt: null,
              title: null,
            },
          },
          { type: "paragraph", content: [{ type: "text", text: "sdad" }] },
          {
            type: "paper",
            from: 0,
            to: 1,
            attrs: {
              lines: [
                {
                  id: "4ed88870-2b80-4699-9dd1-2854742c4abc",
                  color: "#FB5151",
                  size: 5,
                  path: "M86.20689392089844,249.42529296875Z",
                },
              ],
            },
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror-focused {
  outline: 1px solid;
  transition: border-color 0.3s linear;
  outline: none;
}

button {
  background: white;
  border: 1px solid black;
  outline: none;
  cursor: pointer;

  font-size: 1rem;
  margin: 5px;
  border-radius: 5px;
  padding: 5px;

  transition: all 0.3s ease-out;

  &:hover {
    background: lightskyblue;
  }
}

.ProseMirror {
  margin-top: 1rem;
  padding: 2rem;

  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0.75 0.75rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  mark {
    background-color: #faf594;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}
</style>
