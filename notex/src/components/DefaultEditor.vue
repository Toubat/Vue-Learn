<template>
  <div>
    <!-- selected text -->
    <bubble-menu
      class="bubble-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
      v-if="editor"
    >
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleBold()
            .run()
        "
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        Bold
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleItalic()
            .run()
        "
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        Italic
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleStrike()
            .run()
        "
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        Strike
      </button>
    </bubble-menu>
    <!-- on a new line -->
    <floating-menu
      class="floating-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
      v-if="editor"
    >
      <div :style="{ width: 100, height: 100, background: 'red' }">
        ASDADADAS
      </div>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 1 })
            .run()
        "
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 2 })
            .run()
        "
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleBulletList()
            .run()
        "
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        Bullet List
      </button>
    </floating-menu>
    <editor-content :editor="editor" />
    <div>
      <div v-if="editor">
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleBold()
              .run()
          "
          :class="{ 'is-active': editor.isActive('bold') }"
        >
          bold
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleItalic()
              .run()
          "
          :class="{ 'is-active': editor.isActive('italic') }"
        >
          italic
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleStrike()
              .run()
          "
          :class="{ 'is-active': editor.isActive('strike') }"
        >
          strike
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleCode()
              .run()
          "
          :class="{ 'is-active': editor.isActive('code') }"
        >
          code
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .unsetAllMarks()
              .run()
          "
        >
          clear marks
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .clearNodes()
              .run()
          "
        >
          clear nodes
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .setParagraph()
              .run()
          "
          :class="{ 'is-active': editor.isActive('paragraph') }"
        >
          paragraph
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 1 })
              .run()
          "
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
          h1
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 2 })
              .run()
          "
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
          h2
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 3 })
              .run()
          "
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        >
          h3
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 4 })
              .run()
          "
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        >
          h4
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 5 })
              .run()
          "
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
        >
          h5
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 6 })
              .run()
          "
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
        >
          h6
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleBulletList()
              .run()
          "
          :class="{ 'is-active': editor.isActive('bulletList') }"
        >
          bullet list
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleOrderedList()
              .run()
          "
          :class="{ 'is-active': editor.isActive('orderedList') }"
        >
          ordered list
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleCodeBlock()
              .run()
          "
          :class="{ 'is-active': editor.isActive('codeBlock') }"
        >
          code block
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .toggleBlockquote()
              .run()
          "
          :class="{ 'is-active': editor.isActive('blockquote') }"
        >
          blockquote
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .setHorizontalRule()
              .run()
          "
        >
          horizontal rule
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .setHardBreak()
              .run()
          "
        >
          hard break
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .undo()
              .run()
          "
        >
          undo
        </button>
        <button
          @click="
            editor
              .chain()
              .focus()
              .redo()
              .run()
          "
        >
          redo
        </button>
      </div>
    </div>
    <editor-content :editor="editor" />
    <div>{{ editor ? editor.getJSON() : null }}</div>
    <button @click="setJson">Set JSON</button>
  </div>
</template>

<script>
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
  },
  props: {
    modelValue2: { type: String, default: "" },
  },
  data() {
    return {
      editor: null,
      content: "123",
    };
  },
  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit, Image, Highlight, Typography],
      content: this.content,
      onUpdate: () => {
        console.log("on update");
        this.content = this.editor.getHTML();
      },
    });
    // this.setJson();
  },

  beforeUnmount() {
    this.editor.destroy();
  },
  watch: {
    content(value) {
      console.log("watched");

      const isSame = this.editor.getHTML() === value;
      if (isSame) {
        return;
      }
      console.log("ASAs");
      this.editor.commands.setContent(value);
    },
  },
  methods: {
    setJson() {
      console.log("set json");
      this.content = {
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
        ],
      };
    },
  },
};
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
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
