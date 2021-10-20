import {MarkdownView, Plugin} from 'obsidian';

declare const CodeMirror: any;

export default class ImprovedVimCursor extends Plugin {
  async onload() {
    this.setup()

    this.registerEvent(this.app.workspace.on('file-open', () => {
      this.setup();
    }));
  }

  setup() {
    let view = this.app.workspace.getActiveViewOfType(MarkdownView)
    if(!view) {
      return
    }

    CodeMirror.Vim.defineEx("g0", false, (cm: CodeMirror.Editor) => {
      cm.execCommand("goLineLeftSmart");
    })

    CodeMirror.Vim.defineEx("gDollar", false, (cm: CodeMirror.Editor) => {
      cm.execCommand("goLineRight");
    })

    CodeMirror.Vim.defineEx("pHead", false, (cm: CodeMirror.Editor) => {
      const { line } =  cm.getCursor()
      const text = cm.getValue()
      const split = text.split("\n");

      let last = 0;
      for (let i = 0; i < line; i++) {
        const text = split[i];
        if (text.match(/^#{1,6} /)) {
          last = i;
        }
      }
      cm.setCursor(last, 0);
    })

    CodeMirror.Vim.defineEx("nHead", false, (cm: CodeMirror.Editor) => {
      const { line } =  cm.getCursor()
      const text = cm.getValue()
      const split = text.split("\n");

      let last = split.length - 1;
      for (let i = last; i > line; i--) {
        const text = split[i];
        if (text.match(/^#{1,6} /)) {
          last = i;
        }
      }
      cm.setCursor(last, 0);
    })
  }
}
