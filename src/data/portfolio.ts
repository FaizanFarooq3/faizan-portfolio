export type Experience = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    period: "Jan 2025 – Present",
    role: "Data Analyst – Data Science & Engineering",
    company: "CDK Global",
    bullets: [
      "Feature Pipeline Architecture: Designed and executed high-volume ETL and feature engineering pipelines across centralized CRM and DMS databases, ingesting and validating 300,000+ records per rollout for downstream predictive analytics and business intelligence.",
      "Automated Data Preprocessing: Engineered automated Python and SQL transformation workflows that dynamically generate skip-queries and standardize messy schemas, cutting manual engineering overhead by ~40 hours/month.",
      "Anomaly & Outlier Detection: Built automated data-quality and statistical profiling scripts using SQL (Window Functions, CTEs, Subqueries, Automated Query Scripts) to flag distribution anomalies, duplicates, and corrupted records across production pipelines.",
      "Cross-Functional Technical Leadership: Led end-to-end data delivery for a 15–20 dealership North America partner rollout, collaborating directly with product managers and global stakeholders to prioritize high-impact analytical solutions.",
    ],
  },
  {
    period: "Feb 2024 – May 2024",
    role: "Data Analyst Intern",
    company: "Enrun India",
    bullets: [
      "Data Cleaning & Preprocessing: Cleaned, standardized, and validated raw operational datasets using SQL and Excel, resolving missing values, schema inconsistencies, and duplicate records to prepare analysis-ready tables.",
      "Exploratory Data Analysis (EDA): Performed structured SQL aggregations and trend analysis to identify operational bottlenecks, surface data anomalies, and support data-driven business decisions.",
      "Automated Reporting: Built structured tracking sheets and repeatable validation templates in Excel and SQL, cutting recurring data-preparation and weekly reporting turnaround time by ~25–30%.",
    ],
  },
];

export const skills: string[] = [
  "Python",
  "SQL",
  "Scikit-learn",
  "XGBoost",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Optuna",
  "SHAP",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "FastAPI",
  "Docker",
  "MLflow",
  "DVC",
  "PostgreSQL",
  "Parquet",
  "pytest",
  "GitHub Actions",
  "CI/CD",
  "Git",
  "Feature Engineering",
  "ETL Pipelines",
  "Customer Risk & Churn Modeling",
];

export type Project = {
  name: string;
  description: string;
  github?: string;
  blog?: string;
};

export const projects: Project[] = [
  {
    name: "Customer Lifecycle & Revenue Risk Engine",
    description:
      "End-to-end ML system built over PostgreSQL and Parquet using Python (Pandas, NumPy) to engineer behavioral RFM, frequency, and rolling time-window features. Trained and tuned XGBoost/Scikit-learn models with Optuna, tracked experiments in MLflow/DVC, added SHAP explainability, and decoupled inference by serving exported local model artifacts via Dockerized FastAPI with pytest and GitHub Actions CI.",
    github: "https://github.com/FaizanFarooq3/Customer-Churn-and-Revenue-Risk-Engine", // Swap in the exact repo URL
  },
];