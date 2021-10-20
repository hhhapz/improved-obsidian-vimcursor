## Improved VimCursor

![](vimcursor.mp4)

This is a very simple plugin that defines 4 commands in the Vim instance for Obsidian. This defines
great quality of life commands that allow the usage of 0 and $ to work as g0 and g$ in regular Vim.
Namely, when the text is wrapping multiple lines, the above place the cursor at the visual beginning
and visual end of the line (respectively).

This plugin also defines :pHead and :nHead to go to the next Markdown heading in the document. If
none found before or after the cursor (depending on the command), it goes to the beginning, or end
of the document (respectively).

- `:g0`: Go to the visual start of the current line.

- `:g$` Go to the visual end of the current line.

- `:pHead` Go to the most previous defined heading in the document.

- `:nHead` Go to the next defined heading in the document.

This plugin has an implicit dependency on [obsidian-vimrc-support][vimrc]

Here is how I define my .obsidian.vimrc:

```vim
nmap j gj
nmap k gk
nmap 0 :g0
nmap $ :gDollar
nmap [[ :pHead
nmap ]] :nHead


vmap j gj
vmap k gk
```


[vimrc]: https://github.com/esm7/obsidian-vimrc-support
