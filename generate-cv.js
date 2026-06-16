const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  ImageRun, AlignmentType, BorderStyle, WidthType, ShadingType,
  VerticalAlign, ExternalHyperlink, LevelFormat
} = require('docx');
const fs = require('fs');

const portrait = fs.readFileSync('public/images/Portrait2.JPG');

const BLUE = "1F6FBF";
const DARK = "1a1a1a";
const LIGHT_BG = "F2F4F8";

const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function sectionHeader(text) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: BLUE } },
    children: [new TextRun({ text, bold: true, size: 22, color: DARK, font: "Arial" })]
  });
}

function bullet(text) {
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    indent: { left: 200 },
    children: [new TextRun({ text: `• ${text}`, size: 18, font: "Arial", color: "333333" })]
  });
}

function bodyText(text, opts = {}) {
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, size: 18, font: "Arial", color: "333333", ...opts })]
  });
}

function label(text) {
  return new Paragraph({
    spacing: { before: 120, after: 40 },
    children: [new TextRun({ text, bold: true, size: 18, font: "Arial", color: BLUE })]
  });
}

function gap(size = 80) {
  return new Paragraph({ spacing: { before: size, after: 0 }, children: [new TextRun("")] });
}

// LEFT COLUMN
const leftCol = [
  // Photo
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 160 },
    children: [new ImageRun({
      type: "jpg",
      data: portrait,
      transformation: { width: 140, height: 210 },
      altText: { title: "Profile", description: "Profile photo", name: "Portrait" }
    })]
  }),

  // Profile
  new Paragraph({
    spacing: { before: 0, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE } },
    children: [new TextRun({ text: "PROFILE", bold: true, size: 20, color: BLUE, font: "Arial" })]
  }),
  bodyText("Recent BComp Software Engineering graduate (NQF8, Cum Laude) from Belgium Campus iTversity, passionate about building scalable software solutions. Experienced in full-stack development with Angular, .NET, and microservices architecture."),

  gap(),

  // Contact
  new Paragraph({
    spacing: { before: 80, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE } },
    children: [new TextRun({ text: "CONTACT", bold: true, size: 20, color: BLUE, font: "Arial" })]
  }),
  label("EMAIL:"),
  bodyText("mkramatsui@icloud.com"),
  bodyText("keneilwempho15@gmail.com"),

  gap(),

  // Languages
  new Paragraph({
    spacing: { before: 80, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE } },
    children: [new TextRun({ text: "LANGUAGES", bold: true, size: 20, color: BLUE, font: "Arial" })]
  }),
  bodyText("ENGLISH      : 100%"),
  bodyText("SEPEDI        : 100%"),
  bodyText("AFRIKAANS : 50%"),
  bodyText("SPANISH      : 10%"),
];

// RIGHT COLUMN
const rightCol = [
  // Name
  new Paragraph({
    spacing: { before: 0, after: 0 },
    children: [new TextRun({ text: "KENEILWE MPHO RAMATSUI", bold: true, size: 40, font: "Arial", color: DARK })]
  }),
  new Paragraph({
    spacing: { before: 40, after: 160 },
    children: [new TextRun({ text: "PROFESSIONAL CV", size: 20, font: "Arial", color: "666666" })]
  }),

  // Education
  sectionHeader("EDUCATION"),
  gap(60),
  bodyText("LYTTELTON MANOR HIGH SCHOOL", { bold: true }),
  bodyText("2016 – 2020"),
  bullet("1st Team Chess Player from 2017–2020"),
  bullet("Chess Captain from 2019–2020"),
  gap(80),
  bodyText("BELGIUM CAMPUS iTversity", { bold: true }),
  bodyText("2022 – 2025"),
  bullet("BComp: Software Engineering (NQF8) — Cum Laude"),

  gap(120),

  // Skills
  sectionHeader("SKILLS AND ABILITIES"),
  gap(60),
  bullet("Proficient in C#, .NET, Angular, TypeScript, JavaScript, HTML, CSS, PostgreSQL, Docker"),
  bullet("Excellent communication skills"),
  bullet("Goal-driven professional who thrives and delivers"),

  gap(120),

  // Certifications
  sectionHeader("CERTIFICATIONS"),
  gap(60),
  bodyText("Microservices on .NET 8", { bold: true }),
  bodyText("ASP.NET Web API, Docker, MassTransit, Yarp Gateway, Redis & SQL Server"),
  bodyText("Udemy · 2025"),

  gap(120),

  // Hobbies
  sectionHeader("HOBBIES"),
  gap(60),
  bullet("Exercising and healthcare"),
  bullet("Chess (1st Team, Captain 2019–2020) & Soccer"),
  bullet("Solve a Rubik's Cube"),
  bullet("Tutor students"),
  bullet("Learn different languages"),
  bullet("Develop my coding skills"),

  gap(120),

  // Profile links
  sectionHeader("PROFILE"),
  gap(60),
  new Paragraph({
    spacing: { before: 40, after: 40 },
    children: [
      new TextRun({ text: "LinkedIn:  ", size: 18, font: "Arial", color: "333333" }),
      new ExternalHyperlink({
        link: "https://www.linkedin.com/in/keneilwe-mpho-ramatsui/",
        children: [new TextRun({ text: "linkedin.com/in/keneilwe-mpho-ramatsui", size: 18, font: "Arial", style: "Hyperlink" })]
      })
    ]
  }),
  new Paragraph({
    spacing: { before: 40, after: 40 },
    children: [
      new TextRun({ text: "GitHub:    ", size: 18, font: "Arial", color: "333333" }),
      new ExternalHyperlink({
        link: "https://github.com/KMphoR",
        children: [new TextRun({ text: "github.com/KMphoR", size: 18, font: "Arial", style: "Hyperlink" })]
      })
    ]
  }),
];

const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 720, right: 720, bottom: 720, left: 720 }
      }
    },
    children: [
      new Table({
        width: { size: 10466, type: WidthType.DXA },
        columnWidths: [3200, 7266],
        rows: [
          new TableRow({
            children: [
              // Left column
              new TableCell({
                borders: noBorders,
                width: { size: 3200, type: WidthType.DXA },
                shading: { fill: LIGHT_BG, type: ShadingType.CLEAR },
                margins: { top: 400, bottom: 400, left: 300, right: 300 },
                verticalAlign: VerticalAlign.TOP,
                children: leftCol
              }),
              // Right column
              new TableCell({
                borders: noBorders,
                width: { size: 7266, type: WidthType.DXA },
                margins: { top: 400, bottom: 400, left: 500, right: 300 },
                verticalAlign: VerticalAlign.TOP,
                children: rightCol
              })
            ]
          })
        ]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('public/images/KENEILWE_MPHO_RAMATSUI_CV.docx', buffer);
  console.log('CV generated successfully!');
});
