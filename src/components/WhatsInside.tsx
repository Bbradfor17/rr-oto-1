import { Box, Container, Typography } from "@mui/material";

const tocStructure = [
  {
    part: "Introduction",
    chapters: [
      "Why This Book Exists",
      "The Limitations of COAs in Modern Peptide Research",
      "The Rise of Independent Researchers & the Need for Clarity",
      "How to Use This Guide Effectively",
    ],
  },
  {
    part: "Part I — Rethinking COAs",
    chapters: [
      "Chapter 1: What a COA Really Is",
      "Chapter 2: What a COA Doesn't Tell You",
      "Chapter 3: How COAs Get Misread",
    ],
  },
  {
    part: "Part II — The Full Picture of Peptide Quality",
    chapters: [
      "Chapter 4: Raw Materials: The Invisible Beginning",
      "Chapter 5: Environmental Controls & Cleanroom Standards",
      "Chapter 6: Manufacturing Integrity",
      "Chapter 7: Multistage Verification: Beyond the COA",
    ],
  },
  {
    part: "Part III — Practical Quality Evaluation",
    chapters: [
      "Chapter 8: The Revolve 7-Point Quality Model",
      "Chapter 9: Questions Every Researcher Should Ask a Supplier",
      "Chapter 10: How to Compare Suppliers Without Guesswork",
      "Chapter 11: When Variability Matters… and When It Doesn't",
    ],
  },
  {
    part: "Part IV — Ensuring Research Continuity",
    chapters: [
      "Chapter 12: Building Your Own Quality Continuity Plan",
      "Chapter 13: Storage, Shipping, and Handling",
    ],
  },
  {
    part: "Bonus Section — Insider Insights",
    chapters: [
      "Appendix A: Real-World Examples: COA vs. Reality",
      "Appendix B: Common Misconceptions About Peptides",
      "Appendix C: Glossary of Terms",
      "Appendix D: Supplier Evaluation Checklist",
      "Appendix E: Internal Research Material Log",
    ],
  },
];

export const WhatsInside = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#FAFAFA",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              letterSpacing: "-0.01em",
            }}
          >
            What You'll Find Inside
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Complete table of contents—4 comprehensive parts, 13 chapters, and 5
            practical appendices
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {tocStructure.map((section, sectionIndex) => (
            <Box
              key={sectionIndex}
              sx={{
                mb: 4,
                pb: 4,
                borderBottom:
                  sectionIndex < tocStructure.length - 1 ? "1px solid" : "none",
                borderColor: "divider",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.125rem", md: "1.25rem" },
                  mb: 2,
                  color: "primary.main",
                }}
              >
                {section.part}
              </Typography>

              <Box component="ul" sx={{ m: 0, pl: 3, listStyle: "none" }}>
                {section.chapters.map((chapter, chapterIndex) => (
                  <Box
                    component="li"
                    key={chapterIndex}
                    sx={{
                      mb: 1,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "text.primary",
                      "&:before": {
                        content: '"→ "',
                        color: "primary.main",
                        fontWeight: 700,
                        mr: 1,
                      },
                    }}
                  >
                    {chapter}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
