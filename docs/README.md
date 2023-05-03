# Nuvla Documentation

This subdirectory contains the sources for the high-level Nuvla documentation intended for users, managers, and administrators.

This documentation appears on a [GitHub Pages site](https://docs.nuvla.io) linked to this repository. Commits to the master branch of this repository will automatically regenerate the online documentation.

## Syntax

Markdown syntax as supported by
[Kramdown](https://kramdown.gettalong.org/) is the primary formatting for the bulk of the documentation. However, the pages are processed by [Jekyll](https://jekyllrb.com/), so you can also use Jekyll/Liquid directives in the sources.

One customised element in this documentation is a code block (from a file) that contains a "copy to clipboard" button.  The following directive:

```
{% include code_snippet.md file='code/my_file.py' language=python %}
```

will include `code/my_file.py` as a preformatted code block with a "copy to clipboard" button in the upper, right corner. The language option is optional.

## Serving Documentation Locally

## Local setup

To run the documentation website locally, do the following (assuming you are on a Mac):

1. Install Jekyll: [https://jekyllrb.com/docs/installation/macos/#install-ruby](https://jekyllrb.com/docs/installation/macos/#install-ruby)
2. Run this command in this directory: `bundle exec jekyll serve -wl`
3. Point your browser to: [http://localhost:4000](http://localhost:4000)

The local website should be automagically reloading when you save files.  Happy documenting!
