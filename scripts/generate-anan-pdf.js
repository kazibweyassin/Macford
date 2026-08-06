/**
 * Generates public/team/anan-mutabazi-profile.pdf
 * Run: node scripts/generate-anan-pdf.js
 */
const PDFDocument = require('pdfkit')
const fs = require('fs')
const path = require('path')

const out = path.join(__dirname, '..', 'public', 'team', 'anan-mutabazi-profile.pdf')
const doc = new PDFDocument({
  margin: 54,
  size: 'A4',
  info: {
    Title: 'Anan Mutabazi - Founding Partner Profile',
    Author: 'McFord Advocates',
    Subject: 'Professional profile - Anan Mutabazi',
  },
})

const ink = '#141c2e'
const gold = '#c4a35a'
const muted = '#555a66'
const pageW = doc.page.width
const margin = 54
const contentW = pageW - margin * 2

function rule() {
  doc
    .moveTo(margin, doc.y)
    .lineTo(pageW - margin, doc.y)
    .strokeColor(gold)
    .lineWidth(1)
    .stroke()
  doc.moveDown(0.6)
}

function h2(text) {
  doc.moveDown(0.45)
  doc
    .fillColor(ink)
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .text(text.toUpperCase(), { characterSpacing: 0.6 })
  doc.moveDown(0.2)
  doc
    .moveTo(margin, doc.y)
    .lineTo(margin + 40, doc.y)
    .strokeColor(gold)
    .lineWidth(1.5)
    .stroke()
  doc.moveDown(0.4)
}

function bullet(text) {
  const x = margin + 12
  doc.circle(margin + 3, doc.y + 4, 1.6).fill(gold)
  doc
    .fillColor(muted)
    .font('Helvetica')
    .fontSize(10)
    .text(text, x, doc.y, { width: contentW - 12, lineGap: 2 })
  doc.moveDown(0.28)
}

const stream = fs.createWriteStream(out)
doc.pipe(stream)

// Header bar
doc.rect(0, 0, pageW, 8).fill(ink)
doc.rect(0, 8, pageW, 2.5).fill(gold)

doc.moveDown(1.15)
doc.fillColor(ink).font('Helvetica-Bold').fontSize(22).text('ANAN MUTABAZI')
doc.moveDown(0.2)
doc.fillColor(gold).font('Helvetica-Bold').fontSize(11).text('Founding Partner')
doc.moveDown(0.15)
doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(9.5)
  .text('McFord Advocates  |  AfriCourts, Plot 107 Buganda Road, Kampala')
doc.moveDown(0.12)
doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(9)
  .text('Uganda · Kenya · Rwanda · Tanzania  |  14+ years')
doc.moveDown(0.5)
rule()

doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(10)
  .text(
    'Anan Mutabazi is the Founding Partner of McFord Advocates, bringing over 14 years of experience advising governments, multinational corporations, financial institutions, and investors on complex corporate finance, project finance, mergers and acquisitions, and cross-border commercial transactions across East Africa.',
    { width: contentW, align: 'justify', lineGap: 2.5 },
  )
doc.moveDown(0.4)
doc.text(
  "He has successfully led some of the region's most significant transactions, combining deep legal expertise with commercial insight to deliver practical, business-focused solutions.",
  { width: contentW, align: 'justify', lineGap: 2.5 },
)

h2('Representative Experience')

doc.fillColor(ink).font('Helvetica-Bold').fontSize(10).text('Mergers & Acquisitions')
doc.moveDown(0.2)
;[
  'Advised Old Mutual on its acquisition of UAP Insurance.',
  'Advised Atlas Mara Co-Invest on the acquisition of Banque Populaire du Rwanda (BPR).',
  'Advised Broad Band Service Corporation on the acquisition of R-Switch.',
].forEach(bullet)

doc.moveDown(0.15)
doc.fillColor(ink).font('Helvetica-Bold').fontSize(10).text('Telecommunications & Market Entry')
doc.moveDown(0.2)
;[
  'Advised Africa Olley Services on the establishment of Korea Telecom operations in Rwanda and Zambia.',
].forEach(bullet)

doc.moveDown(0.15)
doc.fillColor(ink).font('Helvetica-Bold').fontSize(10).text('Infrastructure & Project Finance')
doc.moveDown(0.2)
;[
  "Advised on the pre-financing and off-taking arrangements for the Standard Gauge Railway, one of East Africa's flagship infrastructure projects.",
].forEach(bullet)

doc.moveDown(0.15)
doc.fillColor(ink).font('Helvetica-Bold').fontSize(10).text('Energy & Power')
doc.moveDown(0.2)
;[
  'Acted as legal counsel for Symbion Power Africa.',
  'Acted as legal counsel for Global Village Energy Partnership (GVEP).',
].forEach(bullet)

h2('Regional Practice')
doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(10)
  .text(
    'Qualified to practice in Uganda, Kenya, Rwanda, and Tanzania, Anan provides seamless cross-border legal counsel on transactions spanning multiple jurisdictions. His practice focuses on corporate finance, banking and finance, infrastructure, energy, private equity, and commercial law.',
    { width: contentW, align: 'justify', lineGap: 2.5 },
  )

h2('Education')
doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(10)
  .text(
    "Anan's multidisciplinary academic background combines law and finance, enabling him to structure transactions that are both legally sound and commercially effective. His qualifications include:",
    { width: contentW, align: 'justify', lineGap: 2.5 },
  )
doc.moveDown(0.35)
;[
  'Master of Laws (LL.M.), University of London',
  "Master's Degree in Corporate Finance, State University of New York",
  'Postgraduate Diploma in Legal Practice, Kenya School of Law',
  'Law degrees from Uganda and Kenya',
].forEach(bullet)

doc.moveDown(0.3)
doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(10)
  .text(
    'His unique blend of legal and financial expertise allows him to advise clients on sophisticated transactions with a practical understanding of both legal risk and commercial objectives.',
    { width: contentW, align: 'justify', lineGap: 2.5 },
  )

h2('Areas of Focus')
doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(10)
  .text(
    'Mergers & Acquisitions  ·  Corporate Finance & Banking  ·  Project Finance & Infrastructure  ·  Energy & Power  ·  Telecommunications & Market Entry  ·  Private Equity & Commercial Law  ·  Cross-border East Africa practice',
    { width: contentW, lineGap: 2.5 },
  )

// Footer
const footerY = doc.page.height - 42
doc
  .moveTo(margin, footerY)
  .lineTo(pageW - margin, footerY)
  .strokeColor(gold)
  .lineWidth(0.8)
  .stroke()
doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(8)
  .text(
    'McFord Advocates  ·  AfriCourts, Plot 107 Buganda Road, Kampala  ·  mcfordadvocates.co.ug  ·  info@mcfordadvocates.co.ug',
    margin,
    footerY + 10,
    { width: contentW, align: 'center' },
  )

doc.end()
stream.on('finish', () => {
  console.log('Wrote', out, fs.statSync(out).size, 'bytes')
})
