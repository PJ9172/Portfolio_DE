
import {
    Database,
    Server,
    Cloud,
    Code,
    Terminal,
    LineChart,
    Layers,
    Cpu
} from "lucide-react";

export const portfolioData = {
    personal: {
        name: "Prajwal Jagtap",
        title: "Data Engineer | Cloud Enthusiast",
        email: "rohitjagtap5000@gmail.com",
        phone: "+91 9172566352",
        linkedin: "https://www.linkedin.com/in/prajwal-jagtap",
        location: "Pune, Maharashtra, India",
        summary: "Computer Applications Graduate (CGPA 9.02) specializing in Data Engineering and Cloud Computing. Expert in building scalable data pipelines, implementing lakehouse architectures, and transforming raw data into actionable insights.",
        heroImage: "/profile-placeholder.jpg" // We will need to add a placeholder or ask user for image
    },
    skills: [
        {
            category: "Data Engineering",
            items: [
                { name: "Apache Spark", icon: LineChart },
                { name: "Delta Lake", icon: Database },
                { name: "Databricks", icon: Layers },
                { name: "ETL/ELT Pipelines", icon: Server },
            ]
        },
        {
            category: "Cloud & DevOps",
            items: [
                { name: "Cloud Platforms", icon: Cloud },
                { name: "Lakehouse Architecture", icon: Database },
                { name: "Docker", icon: Server },
            ]
        },
        {
            category: "Programming",
            items: [
                { name: "Python", icon: Code },
                { name: "GoLang", icon: Terminal },
                { name: "Java", icon: Code },
                { name: "SQL", icon: Database },
                { name: "C++", icon: Code },
            ]
        },
        {
            category: "Web & Tools",
            items: [
                { name: "FastAPI", icon: Server },
                { name: "HTML/CSS", icon: Code },
                { name: "JavaScript", icon: Code },
                { name: "Git/GitHub", icon: Code },
            ]
        }
    ],
    experience: [
        {
            id: 1,
            role: "Bachelor's in Computer Applications",
            company: "Savitribai Phule Pune University",
            period: "June 2021 - April 2024",
            description: "Graduated with 9.02 CGPA. Focus on Software Development, Data Structures, and Cloud Computing basics.",
            type: "education"
        },
        {
            id: 2,
            role: "Databricks Fundamentals Accreditation",
            company: "Databricks",
            period: "2025",
            description: "Fundamental knowledge of the Databricks Lakehouse Platform.",
            type: "certification"
        },
        {
            id: 3,
            role: "Databricks Certified Data Engineer Associate",
            company: "Databricks",
            period: "2025",
            description: "Professional certification validating expertise in Databricks Lakehouse Platform and Data Engineering tasks.",
            type: "certification"
        }
    ],
    projects: [
        {
            id: "real-time-fraud-detection",
            title: "Real-Time Fraud Detection Pipeline",
            shortDescription: "A scalable streaming pipeline using Apache Spark and Kafka to detect fraudulent transactions in real-time.",
            fullDescription: `
        ## Overview
        Designed and implemented a real-time data processing system to identify fraudulent financial transactions with sub-second latency. The system ingests transaction streams, applies machine learning models, and alerts on suspicious activities.

        ## Architecture
        - **Ingestion**: Apache Kafka for high-throughput event streaming.
        - **Processing**: Apache Spark Structured Streaming for stateful aggregations and pattern matching.
        - **Storage**: Delta Lake on AWS S3 for reliable, ACID-compliant data storage.
        - **Serving**: Rest API exposing fraud probability scores to downstream applications.

        ## Key Challenges
        - Handling out-of-order data arrival.
        - optimizing Spark jobs for low-latency micro-batches.
        - Managing state in streaming aggregations to prevent memory bloat.

        ## Outcome
        - Reduced fraud detection time from T+1 day to < 500ms.
        - Processed over 1 million transactions per hour with 99.9% uptime.
      `,
            techStack: ["Apache Spark", "Kafka", "Delta Lake", "Python", "AWS"],
            image: "/project-fraud.jpg",
            github: "https://github.com/prajwal-jagtap",
            demo: "#"
        },
        {
            id: "cloud-lakehouse-migration",
            title: "Enterprise Data Lakehouse Migration",
            shortDescription: "Migrating legacy on-premise data warehouses to a modern Databricks Lakehouse architecture.",
            fullDescription: `
        ## Overview
        Led the migration of 50TB+ of historical data from a legacy SQL Server warehouse to a modern Lakehouse architecture on Azure Databricks. The goal was to unify batch and streaming workloads and enable BI/ML on the same platform.

        ## Architecture
        - **Bronze Layer**: Raw ingestion from various sources (SQL, API, Logs).
        - **Silver Layer**: Cleaned, enriched, and conformed data using Medallion Architecture.
        - **Gold Layer**: Aggregated business-level tables for PowerBI reporting.

        ## Key Challenges
        - Ensuring data consistency during the migration window.
        - Optimizing costly join operations on large datasets.
        - Implementing a rigorous Data Quality (Great Expectations) framework.

        ## Outcome
        - Reduced ETL processing time by 40%.
        - Enabled data scientists to query raw data directly via Spark SQL.
        - Seamless integration with PowerBI for real-time dashboards.
      `,
            techStack: ["Databricks", "Azure", "SQL", "Python", "PowerBI"],
            image: "/project-lakehouse.jpg",
            github: "https://github.com/prajwal-jagtap",
            demo: "#"
        },
        {
            id: "ecommerce-analytics-platform",
            title: "E-commerce Analytics Platform",
            shortDescription: "End-to-end data platform for analyzing user behavior and sales trends for an e-commerce giant.",
            fullDescription: `
            ## Overview
            Built a comprehensive analytics platform to track user journey, cart abandonment rates, and sales performance. The platform unifies clickstream data with transactional records to provide a 360-degree view of the customer.

            ## Architecture
            - **Collection**: Custom tracking pixel sending events to an API Gateway + Kinesis.
            - **ETL**: AWS Glue jobs for transforming JSON logs into Parquet format.
            - **Warehousing**: Amazon Redshift for high-performance analytical queries.
            - **Visualization**: Tableau dashboards embedded for internal stakeholders.

            ## Key Challenges
            - Handling spikes in traffic during holiday sales events.
            - Deduplicating events across multiple devices.
            - Designing a schema that supports ad-hoc queries from non-technical users.

            ## Outcome
            - Provided marketing teams with real-time insights into campaign performance.
            - Optimized inventory management based on predictive sales models.
        `,
            techStack: ["AWS Glue", "Redshift", "Tableau", "Python", "SQL"],
            image: "/project-ecommerce.jpg",
            github: "https://github.com/prajwal-jagtap",
            demo: "#"
        }
    ]
};
