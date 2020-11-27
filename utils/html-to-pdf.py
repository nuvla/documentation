#!/usr/bin/env python

from weasyprint import HTML, CSS

#base_url = 'https://docs.nuvla.io'
base_url = 'http://localhost:4000'
target_doc = open('docs.pdf','wb')
pages = ['nuvla/workflows/workflows.html',
         'nuvla/workflows/workflow-registration.html',
         'nuvla/workflows/workflow-update.html',
]

docs = []

CSSs = [CSS(string='.side-bar, .site-footer {display: none !important;}'),
        CSS(string='#edit-button {display: none !important;}'),
        CSS(string='#top-warning {display: none !important;}'),
        CSS(string='#toc {display: none !important;}'),]

for page in pages:
    url = '/'.join([base_url, page])
    print('processing page:', url)
    docs.append(HTML(url).render(stylesheets=CSSs))

all_pages = []

for doc in docs:
    for p in doc.pages:
        all_pages.append(p)

print('processed', len(all_pages), 'pages')

docs[0].copy(all_pages).write_pdf(target_doc)

print('output file:', target_doc.name)
