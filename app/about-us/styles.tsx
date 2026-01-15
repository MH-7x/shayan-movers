"use client";
const Styles = () => {
  return (
    <style jsx global>{`
      :root {
        --brand-color: #d84315;
        --heading-color: #263238;
        --text-color: #404040;
        --neutral-color: #fdf4f1;
      }

      h1 {
        font-size: 3rem !important;
      }
      h2 {
        font-size: 2.25rem !important;
      }
      h3 {
        font-size: 1.5rem !important;
      }
      p,
      li {
        font-size: 1.125rem !important;
      }

      @media (max-width: 768px) {
        h1 {
          font-size: 2rem !important;
        }
        h2 {
          font-size: 1.75rem !important;
        }
        h3 {
          font-size: 1.25rem !important;
        }
        p,
        li {
          font-size: 1rem !important;
        }
      }
    `}</style>
  );
};

export default Styles;
