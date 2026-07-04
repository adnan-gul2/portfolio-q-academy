"use client";
import Link from "next/link";
import { TextArrowIcon } from "@/svg";

const trustBadges = [
  { id: 1, title: "Money-Back Guarantee", desc: "30-day money-back guarantee" },
  { id: 2, title: "Fast Delivery", desc: "2-4 weeks delivery time" },
  { id: 3, title: "Mobile Optimized", desc: "100% responsive design" },
  { id: 4, title: "SEO Friendly", desc: "Optimized for search engines" },
  { id: 5, title: "24/7 Support", desc: "Dedicated support team" },
];

const QuranAcademyCTA = () => {
  return (
    <section className="px-cta-area pt-130 pb-130" style={{ backgroundColor: "#1a5c45" }}>
      <div className="container container-1550">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <h2 className="px-section-title white-style mb-40">
              Ready to Transform Your<br />Quran Academy Online?
            </h2>
            <p className="text-white mb-50" style={{ opacity: 0.9 }}>
              Let us help you build a premium website that attracts more students<br />
              and streamlines your academy operations.
            </p>
            <Link
              href="/contact-us"
              className="px-btn px-btn-white mb-80"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#c9a84c",
                borderColor: "#c9a84c",
                color: "#fff",
                padding: "18px 40px",
                borderRadius: "4px",
                fontWeight: 600,
              }}
            >
              <span>Get a Free Consultation</span>
              <i>
                <TextArrowIcon />
              </i>
            </Link>

            <div className="px-trust-badges d-flex flex-wrap justify-content-center gap-4 mt-40">
              {trustBadges.map((badge) => (
                <div key={badge.id} className="px-trust-badge" style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  padding: "15px 20px",
                  borderRadius: "8px",
                  minWidth: "140px",
                }}>
                  <span style={{ color: "#c9a84c", fontWeight: 600 }}>{badge.title}</span>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", margin: 0 }}>{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranAcademyCTA;
