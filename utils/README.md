## Render PDF documentation from HTML

The rendering uses https://github.com/Kozea/WeasyPrint

Create virtual environment based on Python 3.x and install weasyprint

```
   mkvirtualenv -p /usr/local/bin/python3.7 -i weasyprint html-to-pdf-py3
```

On Mac you might need to (re-)install 

```
   brew install cairo pango gdk-pixbuf libffi
```
