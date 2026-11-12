// ------------------------------------------------------------------
// Add one object per project. Every field is used somewhere:
//
//   title        — card heading
//   summary      — one or two sentences, shown on the card
//   skills       — array of short tags, shown as chips on the card
//   screenshot   — path relative to /public, shown at the top of the
//                  modal (e.g. "/projects/my-project/cover.png").
//                  Leave as null to skip the image.
//   links        — optional { label, href } entries, shown as buttons
//                  in the modal (e.g. repo, live demo, paper).
//   documentation — the body of the modal. This accepts an array of
//                  section blocks so you can write real docs, not
//                  just a paragraph. Two block types are supported:
//                    { heading, body }         → a titled paragraph
//                    { heading, list: [...] }  → a titled bullet list
//
// Leave documentation as an empty array until you're ready to write
// it — the modal will just show the summary in that case.
// ------------------------------------------------------------------

export const projects = [
  {
    id: "pdac-medsam3",
    title: "PDAC-MedSAM3: Pancreatic Tumour Segmentation",
    summary:
      "Research project at Macquarie University: fine-tuned Meta's SAM3 (from MedSAM3) to find and outline " +
      "pancreatic ductal adenocarcinoma on CT scans fully automatically, using only a text prompt.",
    skills: ["Python", "PyTorch", "SAM3", "LoRA", "Medical imaging", "Hugging Face"],
    screenshot: null,
    links: [
      { label: "Repository", href: "https://github.com/JacobLiu124/PDAC-MedSAM3" },
    ],
    documentation: [
      {
        heading: "Overview",
        body:
          "Give the model a CT scan and it returns a 3D tumour mask, with no clicks or boxes needed. " +
          "I trained LoRA layers on top of the frozen SAM3 base model using 77 patients from the Medical " +
          "Segmentation Decathlon, and compared it against nnU-Net, the standard baseline for medical segmentation.",
      },
      {
        heading: "Results",
        list: [
          "Found 81 of 83 tumours on scans from new hospitals it never saw in training (nnU-Net found 72).",
          "Mean 3D Dice of 0.37 on those scans, close to nnU-Net's 0.39, and 0.43 on held-out scans from the training hospital.",
          "Held up better at new hospitals: Dice dropped by 0.07 from the training hospital, against 0.16 for nnU-Net.",
          "Fine-tuning raised Dice at the training hospital from 0.27 (MedSAM3 as released) to 0.43.",
          "Main weakness: about 6 false spots per scan, because each slice is segmented without 3D context.",
        ],
      },
      {
        heading: "Example predictions",
        image: "/projects/pdac/side_by_side.png",
        alt: "CT slices comparing the expert tumour outline with nnU-Net and fine-tuned SAM3 predictions for four patients",
        caption:
          "Expert outline (white), nnU-Net (blue) and fine-tuned SAM3 (orange) on four patients, " +
          "including the case where each model does best against the other.",
      },
      {
        heading: "Per-patient accuracy",
        image: "/projects/pdac/dice_comparison.png",
        alt: "Dot plot of per-patient Dice scores for nnU-Net and SAM3 on both test sets",
        caption:
          "Each dot is one patient. Black lines show the mean with a 95% bootstrap range.",
      },
      {
        heading: "All models compared",
        image: "/projects/pdac/all_models_dice_bars.png",
        alt: "Bar charts of mean Dice for nnU-Net and three MedSAM3 variants on both test sets",
        caption:
          "nnU-Net against MedSAM3 before and after fine-tuning. The right panel shows how much each model " +
          "drops when moved to new hospitals.",
      },
    ],
  },

  // Duplicate the shape above for each additional project.
  // {
  //   id: "project-two",
  //   title: "...",
  //   summary: "...",
  //   skills: [],
  //   screenshot: null,
  //   links: [],
  //   documentation: [],
  // },
];
