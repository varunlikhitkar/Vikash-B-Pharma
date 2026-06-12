import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const outputPath = path.resolve('public', 'Vikash_Pawar_Resume.pdf');

const doc = new PDFDocument({ size: 'A4', margin: 48, bufferPages: true });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

doc
  .fillColor('#050816')
  .fontSize(22)
  .font('Helvetica-Bold')
  .text('VIKASH PAWAR', { align: 'center' });

doc
  .moveDown(0.4)
  .fillColor('#F5B82E')
  .fontSize(12)
  .font('Helvetica')
  .text('B.Pharm Student | Hospital Pharmacist', { align: 'center' });

doc.moveDown(1);
doc.fillColor('#111827').fontSize(11).font('Helvetica-Bold').text('Contact');
doc.font('Helvetica').fontSize(10).fillColor('#374151');
doc.text('Mobile: 6267936580');
doc.text('Email: vikashpawar163@gmail.com');
doc.text('Address: Bhopal, Madhya Pradesh, India');

doc.moveDown(0.8);
doc.font('Helvetica-Bold').fillColor('#111827').fontSize(11).text('Career Objective');
doc.font('Helvetica').fontSize(10).fillColor('#374151');
doc.text(
  'Motivated and dedicated Bachelor of Pharmacy student seeking an opportunity to apply pharmaceutical knowledge, computer skills, and hospital pharmacy experience in a professional healthcare environment.',
  { lineGap: 4 },
);

doc.moveDown(0.8);
doc.font('Helvetica-Bold').fillColor('#111827').fontSize(11).text('Education');
doc.font('Helvetica').fontSize(10).fillColor('#374151');
doc.text('Bachelor of Pharmacy (B.Pharm)');
doc.text('JNCT Professional University (JNCTPU)');

doc.moveDown(0.8);
doc.font('Helvetica-Bold').fillColor('#111827').fontSize(11).text('Skills');
doc.font('Helvetica').fontSize(10).fillColor('#374151');
doc.list([
  'Computer Course Completed',
  'Basic Computer Applications',
  'Communication Skills',
  'Teamwork and Collaboration',
  'Time Management',
]);

doc.moveDown(0.8);
doc.font('Helvetica-Bold').fillColor('#111827').fontSize(11).text('Experience');
doc.font('Helvetica').fontSize(10).fillColor('#374151');
doc.text('Part-Time Hospital Pharmacist');
doc.list([
  'Assisted in dispensing medicines.',
  'Maintained medicine inventory and records.',
  'Supported pharmacists in daily pharmacy operations.',
  'Provided basic guidance to patients regarding medication use.',
]);

doc.moveDown(0.8);
doc.font('Helvetica-Bold').fillColor('#111827').fontSize(11).text('Languages');
doc.font('Helvetica').fontSize(10).fillColor('#374151').text('Hindi, English');

doc.moveDown(0.8);
doc.font('Helvetica-Bold').fillColor('#111827').fontSize(11).text('Declaration');
doc.font('Helvetica').fontSize(10).fillColor('#374151');
doc.text('I hereby declare that the information provided above is true and correct to the best of my knowledge.');
doc.moveDown(1);
doc.text('Date: ____________________');
doc.text('Signature: Vikash Pawar');

doc.end();

stream.on('finish', () => {
  process.stdout.write(`Created ${outputPath}\n`);
});