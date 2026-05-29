import { ScrollReveal } from "@/components/ui/scroll-reveal";

const exams = [
  {
    title: "MRI Preparation",
    instructions: [
      "Remove all metal objects including jewelry, watches, and piercings",
      "Inform staff of any implants (pacemakers, cochlear implants, metal plates)",
      "Wear comfortable, loose-fitting clothing without metal fasteners",
      "You may eat and drink normally unless instructed otherwise",
      "Arrive 15 minutes before your scheduled appointment",
      "If you experience claustrophobia, ask about our Open MRI option",
    ],
  },
  {
    title: "PET/CT Preparation",
    instructions: [
      "Do not eat or drink (except water) for 6 hours before the exam",
      "Avoid strenuous exercise for 24 hours before the scan",
      "Diabetic patients: consult with our staff about insulin adjustments",
      "Wear warm, comfortable clothing",
      "The exam takes approximately 60–90 minutes",
      "You will receive an injection of a radioactive tracer",
    ],
  },
  {
    title: "Digital X-Ray Preparation",
    instructions: [
      "Minimal preparation required — walk-ins welcome",
      "Remove jewelry or metal objects from the area being imaged",
      "Inform the technologist if you may be pregnant",
      "Wear clothing that can be easily removed if necessary",
      "The exam typically takes 10–15 minutes",
    ],
  },
  {
    title: "Ultrasound Preparation",
    instructions: [
      "Abdominal ultrasound: Do not eat or drink for 8 hours prior",
      "Pelvic ultrasound: Drink 32 oz of water 1 hour before, do not urinate",
      "OB ultrasound: Follow your physician's specific instructions",
      "Wear loose, comfortable clothing",
      "The exam typically takes 30–45 minutes",
    ],
  },
  {
    title: "DEXA Scan Preparation",
    instructions: [
      "Do not take calcium supplements for 24 hours before the exam",
      "Wear loose, comfortable clothing without metal zippers or buttons",
      "Inform staff of any recent barium exams or contrast injections",
      "The scan takes approximately 15–20 minutes",
      "Results are typically available within 24–48 hours",
    ],
  },
];

export default function ExamPrepPage() {
  return (
    <div className="pt-[104px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div className="mb-16 hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Before Your Visit
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Exam Preparation Guide
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Proper preparation helps ensure the highest quality images and the most accurate diagnosis. Please review the guidelines for your specific exam below.
            </p>
          </div>

          <div className="space-y-6">
            {exams.map((exam) => (
              <ScrollReveal key={exam.title}>
                <div className="rounded-2xl bg-surface-low p-1.5 ring-1 ring-black/[0.04]">
                  <div className="rounded-[calc(1rem-6px)] bg-white p-6 md:p-8">
                    <h2 className="text-lg font-bold text-on-surface mb-5">{exam.title}</h2>
                    <ul className="space-y-3">
                      {exam.instructions.map((instruction, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-primary/8 text-primary text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
