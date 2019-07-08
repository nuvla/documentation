#!/usr/bin/env python

from weasyprint import HTML, CSS

base_url = 'https://docs.nuvla.io'
#base_url = 'http://localhost:4000'
target_doc = open('docs.pdf','wb')
pages = ['dave',
         'docs/dave/quick/nuvla-quick.html',
         'docs/dave/quick/nuvla-deployment.html',
         'docs/dave/quick/caas-infrastructures.html',
         'docs/dave/quick/nuvla-module-population.html',
         'docs/dave/quick/nuvla-validate.html',
         'docs/dave/prod/nuvla-prod.html',
         'docs/dave/prod/nuvla-deployment.html',
         'docs/dave/prod/nuvla-ops-backups.html',
         'docs/dave/prod/caas-infrastructures.html',
         'docs/dave/prod/caas-optional-services.html',
         'docs/dave/prod/nuvla-caas-add.html',
         'docs/dave/prod/nuvla-module-population.html',
         'docs/dave/prod/nuvla-validate.html',
         'docs/dave/prod/nuvla-ops.html',
         'docs/dave/embedded-portal.html',
         'docs/dave/nuvlabox.html',
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
